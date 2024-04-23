package com.luckyseven.user.auth.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class JoinDto {
    private String id;
    private Properties properties;
    private String connectedAt;

    @Setter
    @Getter
    @ToString
    @RequiredArgsConstructor
    @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
    public class Properties {
        private String nickname;
        private String profileImage;
        private String thumbnailImage;
    }
}
