package com.luckyseven.notification.controller;

import com.luckyseven.notification.documents.Test;
import com.luckyseven.notification.repository.TestRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RequiredArgsConstructor
@RestController
@RequestMapping("/test")
public class TestController {
    private final TestRepo testRepo;
    @GetMapping("/save")
    public ResponseEntity<?> test(){
        Test ts = new Test();
        ts.setId("testId2");
        ts.setData("저장되라2");
        // 현재 날짜를 가져옴
        Date date = new Date();
        // 날짜를 원하는 형식으로 변환
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String formattedDate = formatter.format(date);
        ts.setTime(formattedDate);

        Test save = testRepo.save(ts);
        return ResponseEntity.ok().body(save);
    }
}
