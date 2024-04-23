package com.luckyseven.notification;

import com.luckyseven.notification.documents.Test;
import com.luckyseven.notification.repository.TestRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NotificationApplication {

	public static void main(String[] args) {

		SpringApplication.run(NotificationApplication.class, args);

	}
}
