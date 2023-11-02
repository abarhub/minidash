package org.minidash.minidash.config;

import org.minidash.minidash.base.service.BaseService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceConfig {

    @Value("${repertoireDonnees}")
    private String repertoireDonnees;

    @Bean
    public BaseService baseService() {
        return new BaseService(repertoireDonnees);
    }
}
