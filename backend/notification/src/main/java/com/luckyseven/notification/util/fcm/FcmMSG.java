package com.luckyseven.notification.util.fcm;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Builder
@AllArgsConstructor
@Getter
public class FcmMSG {
    private boolean validateOnly;
    private Message message;

    @Builder
    @AllArgsConstructor
    @Getter
    public static class Message {
        private Notification notification;
        private String token;
        private Map<String, String> data;
    }

    @Builder
    @AllArgsConstructor
    @Getter
    public static class Notification {
        private String contents;
    }
}
