package com.luckyseven.event.rollsheet.service;

import com.luckyseven.event.rollsheet.dto.CreateRollSheetDto;
import com.luckyseven.event.rollsheet.entity.RollSheet;

public interface RollSheetService {

     RollSheet createRollSheet(CreateRollSheetDto rollSheetDto, String userId, int eventId);
}
