package com.luckyseven.event.rollsheet.service;

import com.luckyseven.event.rollsheet.dto.CreateRollSheetDto;
import com.luckyseven.event.rollsheet.entity.RollSheet;

import java.util.List;
import java.util.NoSuchElementException;

public interface RollSheetService {

     RollSheet createRollSheet(CreateRollSheetDto rollSheetDto, String userId, int eventId);
     List<RollSheet> getRollSheetListWithEventId(int eventId) throws NoSuchElementException;
}
