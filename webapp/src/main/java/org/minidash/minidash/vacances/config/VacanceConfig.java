package org.minidash.minidash.vacances.config;

import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.properties.AppProperties;
import org.minidash.minidash.vacances.service.VacanceRestService;
import org.minidash.minidash.vacances.service.VacancesScolaireService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.support.RestClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
public class VacanceConfig {

    @Bean
    public VacanceRestService vacanceRestService(AppProperties appProperties) {
        RestClient restClient = RestClient.builder().baseUrl(appProperties.getVacances().getUrlVacancesScolaires()).build();
        RestClientAdapter adapter = RestClientAdapter.create(restClient);
        HttpServiceProxyFactory factory = HttpServiceProxyFactory.builderFor(adapter).build();

        return factory.createClient(VacanceRestService.class);
    }

    @Bean
    public VacancesScolaireService vacancesScolaireService(BaseService baseService,
                                                           AppProperties appProperties,
                                                           VacanceRestService vacanceRestService) {
        return new VacancesScolaireService(baseService, appProperties, vacanceRestService);
    }

}
