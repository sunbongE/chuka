package com.luckyseven.event.rollsheet.service;

import com.luckyseven.event.rollsheet.dto.CreateRollSheetDto;
import com.luckyseven.event.rollsheet.entity.RollSheet;
import com.luckyseven.event.rollsheet.entity.Shape;
import com.luckyseven.event.rollsheet.repository.RollSheetRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class RollSheetServiceImpl implements RollSheetService {

    private final RollSheetRepository rollSheetRepository;

    @Override
    public RollSheet createRollSheet(CreateRollSheetDto rollSheetDto, String userId, int eventId) {
        RollSheet rollSheet = new RollSheet();
        rollSheet.setEventId(eventId);
        rollSheet.setUserId(userId);
        rollSheet.setShape(rollSheetDto.getShape());
        rollSheet.setBackgroundColor(rollSheetDto.getBackgroundColor());
        rollSheet.setContent(rollSheetDto.getContent());
        rollSheet.setFont(rollSheetDto.getFont());
        rollSheet.setFontColor(rollSheetDto.getFontColor());
        rollSheet.setNickname(rollSheetDto.getNickname());
        rollSheet.setCreateTime(LocalDateTime.now());

        // TODO: 배경사진 저장
        // rollSheet.setBackgroundImage();

        log.info("rollSheet: {}", rollSheet);

        return rollSheetRepository.save(rollSheet);
    }
}
