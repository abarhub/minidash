package org.minidash.minidash.base.service;


import org.minidash.minidash.base.model.GlobalModel;
import tools.jackson.databind.DeserializationFeature;
import tools.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Objects;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class BaseService {

    private final Path repertoireDonnees;

    private final ReentrantReadWriteLock lock;

    private final ObjectMapper objectMapper;

    public BaseService(String repertoireDonnees) {
        this.repertoireDonnees = Path.of(Objects.requireNonNull(repertoireDonnees, "Le répertoire de configuration est vide"));
        lock = new ReentrantReadWriteLock();
        objectMapper = new ObjectMapper()
                .rebuild()
                .disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)
                .build();
    }

    public GlobalModel get() throws IOException {
        var readerLock = lock.readLock();
        try {
            readerLock.lock();
            var file = getFile();
            if (Files.exists(file)) {
                try (var reader = Files.newBufferedReader(file)) {
                    return objectMapper.readValue(reader, GlobalModel.class);
                }
            } else {
                return null;
            }
        } finally {
            readerLock.unlock();
        }
    }

    public void save(GlobalModel globalModel) throws IOException {
        var writeLock = lock.writeLock();
        try {
            writeLock.lock();
            objectMapper.writeValue(getFile().toFile(), globalModel);
        } finally {
            writeLock.unlock();
        }
    }

    private Path getFile() {
        return repertoireDonnees.resolve("data.json");
    }
}
