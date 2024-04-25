package com.luckyseven.event.rollsheet.controller;

import com.luckyseven.event.rollsheet.dto.CreateRollSheetDto;
import com.luckyseven.event.rollsheet.entity.RollSheet;
import com.luckyseven.event.rollsheet.service.RollSheetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@Tag(name = "RollSheet", description = "이벤트(롤링페이퍼) API")
public class RollSheetController {

    private final RollSheetService rollSheetService;

    @PostMapping("/events/{eventId}")
    @Operation(summary = "롤링페이퍼 등록", description = "롤링페이퍼를 등록(생성)한다.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
    })
    public ResponseEntity<?> createRollSheet(
            @PathVariable("eventId") int eventId,
            @RequestBody CreateRollSheetDto rollSheetDto,
            @RequestHeader(name = "loggedInUser", required = false) String userId
    ) {

        try {
            RollSheet rollSheet = rollSheetService.createRollSheet(rollSheetDto, userId, eventId);

            return ResponseEntity.status(200).body(rollSheet);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return ResponseEntity.status(400).body(null);
    }
}
