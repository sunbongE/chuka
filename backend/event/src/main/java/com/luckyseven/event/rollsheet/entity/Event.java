package com.luckyseven.event.rollsheet.entity;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@Table(indexes = @Index(name = "event_uri_idx", columnList = "page_uri", unique = true))
public class Event {

    @Id
    private int eventId;

    private String userId;

    @Column(length = 26, nullable = false)
    private String pageUri;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EventType type;

    @Column(length = 15, nullable = false)
    private String title;

    @Column(nullable = false)
    private LocalDate date;

    private String banner;

    private String bannerThumbnail;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Theme theme;

    @Column(nullable = false)
    private Boolean visibility;

    @Column(nullable = false)
    private LocalDateTime createTime;

}
