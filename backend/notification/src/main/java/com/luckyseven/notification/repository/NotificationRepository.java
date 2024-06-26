package com.luckyseven.notification.repository;

import com.luckyseven.notification.documents.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends MongoRepository<Notification, String> {


    List<Notification> findAllByUserIdOrderByCreateDateTimeDesc(String userId); //findAllByUserIdOrderByCreateTimeDesc

    String findByNotificationId(String notificationId);

    void deleteByNotificationId(String notificationId);

    void deleteAllByUserId(String userId);
}
