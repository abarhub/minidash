package org.minidash.minidash.config;

import org.minidash.minidash.base.service.BaseService;
import org.minidash.minidash.properties.AppProperties;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableScheduling
@EnableConfigurationProperties(AppProperties.class)
public class ServiceConfig {

//    @Value("${repertoireDonnees}")
//    private String repertoireDonnees;

    @Bean
    public BaseService baseService(AppProperties appProperties) {
        return new BaseService(appProperties.getRepertoireDonnees());
    }
}
