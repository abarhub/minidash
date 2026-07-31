package org.minidash.minidash;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@SpringBootApplication
public class MinidashApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(MinidashApplication.class);

    public static void main(String[] args) {
        Map<String, Object> dotenv = loadDotEnvFile();
//        SpringApplication.run(MinidashApplication.class, args);
        new SpringApplicationBuilder(MinidashApplication.class)
                .properties(dotenv)
                .run(args);
    }

    private static Map<String, Object> loadDotEnvFile() {
        Map<String, Object> dotenv = new HashMap<>();
        var envFile = System.getProperty("envFile");
        Path p;
        if (StringUtils.isNotEmpty(envFile)) {
            p = Paths.get(envFile);
        } else {
            p = Paths.get(".env");
        }
        if (Files.exists(p)) {
            LOGGER.info("Loading env file");
            Properties prop = new Properties();
            try {
                prop.load(Files.newBufferedReader(p));
                for (Object key : prop.keySet()) {
                    dotenv.put(key.toString(), String.valueOf(prop.get(key)));
                }
            } catch (IOException e) {
                LOGGER.error("Erreur pour charger le fichier .env", e);
            }
        } else {
            LOGGER.info("Pas de fichier env");
        }
        return dotenv;
    }

}
