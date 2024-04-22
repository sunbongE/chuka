package com.luckyseven.notification.controller;

import com.luckyseven.notification.documents.Test;
import com.luckyseven.notification.repository.TestRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/test")
public class TestController {
    private final TestRepo testRepo;
    @GetMapping("/save")
    public ResponseEntity<?> test(){
        Test ts = new Test();
        ts.setId("testId");
        ts.setData("저장되라");
        Test save = testRepo.save(ts);
        return ResponseEntity.ok().body(save);
    }
}
