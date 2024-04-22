package com.luckseven.user.user.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
public class User {

    @Id
    private String userId;

    @NotNull
    @Column(length = 15, nullable = false)
    private String nickname;

    private String profileImage;

    @NotNull
    @Column(nullable = false)
    private LocalDateTime joinDate;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    @ColumnDefault("'ROLE_USER'")
    private Roles role;

}
