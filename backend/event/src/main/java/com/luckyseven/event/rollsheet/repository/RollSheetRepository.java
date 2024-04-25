package com.luckyseven.event.rollsheet.repository;

import com.luckyseven.event.rollsheet.entity.RollSheet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RollSheetRepository extends MongoRepository<RollSheet, String> {
}
