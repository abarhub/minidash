package org.minidash.minidash.config;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.observation.ObservationRegistry;
import org.apache.hc.client5.http.config.ConnectionConfig;
import org.apache.hc.client5.http.config.RequestConfig;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
import org.apache.hc.core5.http.io.SocketConfig;
import org.apache.hc.core5.util.TimeValue;
import org.apache.hc.core5.util.Timeout;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.meteo.model.MeteoGlobalModel;
import org.minidash.minidash.meteo.service.MeteoRestService;
import org.minidash.minidash.meteo.service.MeteoService;
import org.minidash.minidash.properties.ApacheHttpClientProperties;
import org.minidash.minidash.properties.AppProperties;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

import java.time.Duration;

@Configuration
public class MeteoConfig {

    @Bean
    public MeteoRestService meteoRestService(AppProperties appProperties,
                                             RestClient.Builder restClientBuilder,
                                             CloseableHttpClient apacheHttpClient) {
        var requestFactory =
                new HttpComponentsClientHttpRequestFactory(apacheHttpClient);

        RestClient restClient = restClientBuilder
                .baseUrl(appProperties.getMeteo().getUrl())
                .requestFactory(requestFactory)
                .build();
        RestClientAdapter adapter = RestClientAdapter.create(restClient);
        HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();

        return factory.createClient(MeteoRestService.class);
    }

    @Bean(destroyMethod = "close")
    public CloseableHttpClient apacheHttpClient(ApacheHttpClientProperties apacheHttpClientProperties) {
        ConnectionConfig connectionConfig = ConnectionConfig.custom()
                .setSocketTimeout(Timeout.of(apacheHttpClientProperties.getSocketTimeout()))
                .setConnectTimeout(Timeout.of(apacheHttpClientProperties.getConnectionTimeout()))
                .setTimeToLive(TimeValue.of(apacheHttpClientProperties.getTimeToLive()))
                .build();

        PoolingHttpClientConnectionManager connectionManager =
                PoolingHttpClientConnectionManagerBuilder.create()
                        .setMaxConnTotal(apacheHttpClientProperties.getMaxConnectionTotal())
                        .setMaxConnPerRoute(apacheHttpClientProperties.getMaxConnectionPerRoute())
                        .setDefaultSocketConfig(SocketConfig.custom()
                                .setSoTimeout(Timeout.of(apacheHttpClientProperties.getSocketTimeout()))
                                .build())
                        .setDefaultConnectionConfig(connectionConfig)
                        .build();

        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectionRequestTimeout(Timeout.of(apacheHttpClientProperties.getConnectionRequestTimeout()))
                .setResponseTimeout(Timeout.of(apacheHttpClientProperties.getResponseTimeout()))
                .build();

        return HttpClients.custom()
                .setConnectionManager(connectionManager)
                .setDefaultRequestConfig(requestConfig)
                .evictExpiredConnections()
                .build();
    }


    @Bean
    public MeteoService meteoService(BaseService baseService, AppProperties appProperties,
                                     MeteoRestService meteoRestService, ObservationRegistry observationRegistry,
                                     MeterRegistry meterRegistry, OllamaChatModel chatModel,
                                     Cache<Integer, MeteoGlobalModel> meteoCache) {
        return new MeteoService(baseService, appProperties, meteoRestService, observationRegistry, meterRegistry,
                chatModel, appProperties.getTelegram().getMeteo(), meteoCache);
    }

    @Bean
    public Cache<Integer, MeteoGlobalModel> meteoCache() {
        return Caffeine.newBuilder()
                .expireAfterWrite(Duration.ofMinutes(15))
                .recordStats()
                .build();
    }

    @Bean
    public ChatClient openAiChatClient(OllamaChatModel chatModel) {
        return ChatClient.create(chatModel);
    }

}
