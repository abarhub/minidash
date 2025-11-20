package org.minidash.minidash.config;

import io.micrometer.observation.ObservationRegistry;
import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.meteo.service.MeteoRestService;
import org.minidash.minidash.meteo.service.MeteoService;
import org.minidash.minidash.properties.AppProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class MeteoConfig {

    @Bean
    public MeteoRestService meteoRestService(AppProperties appProperties, RestClient.Builder restClientBuilder) {
        RestClient restClient = restClientBuilder.baseUrl(appProperties.getMeteo().getUrl()).build();
        RestClientAdapter adapter = RestClientAdapter.create(restClient);
        HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();

        return factory.createClient(MeteoRestService.class);
    }

    @Bean
    public MeteoService meteoService(BaseService baseService, AppProperties appProperties,
                                     MeteoRestService meteoRestService, ObservationRegistry observationRegistry) {
        return new MeteoService(baseService, appProperties, meteoRestService, observationRegistry);
    }

}
