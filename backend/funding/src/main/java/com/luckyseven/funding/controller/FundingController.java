package com.luckyseven.funding.controller;

import com.luckyseven.funding.dto.FundingCreateReq;
import com.luckyseven.funding.service.FundingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/funding")
public class FundingController {
    private final FundingService fundingService;

    @PostMapping
    @Operation(
            summary = "펀딩 등록",
            description = "<strong>eventId</strong>를 꼭 담아서 보내주세요.")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "성공"),
            @ApiResponse(responseCode = "500", description = "서버 오류")
    })

    public ResponseEntity<?> createFunding(@RequestBody FundingCreateReq dto){
        try{
            //log.debug(dto.toString());
            int fundingId = fundingService.createFunding(dto);
            return ResponseEntity.status(HttpStatus.OK).body(fundingId);
        } catch (Exception e){
            log.info("[ERROR] : {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
