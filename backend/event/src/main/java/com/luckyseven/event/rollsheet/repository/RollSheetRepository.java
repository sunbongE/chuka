package com.luckyseven.event.rollsheet.repository;

import com.luckyseven.event.rollsheet.entity.RollSheet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RollSheetRepository extends MongoRepository<RollSheet, String> {

    List<RollSheet> findByEventId(int eventId);
    int countByEventId(int eventId);
    void deleteAllByEventId(int eventId);

}
