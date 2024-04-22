package com.luckseven.user.auth.controller;

import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1")
@RestController
public class AuthController {

    @GetMapping("/auth/login")
    public ResponseEntity<?> login() {

        return ResponseEntity.status(200).body(null);
    }

}
