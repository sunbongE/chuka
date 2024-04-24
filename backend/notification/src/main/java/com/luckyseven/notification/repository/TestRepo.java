package com.luckyseven.notification.repository;

import com.luckyseven.notification.documents.Test;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestRepo extends MongoRepository<Test, String> {
}