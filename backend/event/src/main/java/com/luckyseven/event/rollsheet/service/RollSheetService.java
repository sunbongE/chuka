package com.luckyseven.event.rollsheet.service;

import com.luckyseven.event.common.exception.BigFileException;
import com.luckyseven.event.common.exception.EmptyFileException;
import com.luckyseven.event.common.exception.NotValidExtensionException;
import com.luckyseven.event.rollsheet.dto.CreateRollSheetDto;
import com.luckyseven.event.rollsheet.entity.RollSheet;

import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

public interface RollSheetService {

     RollSheet  createRollSheet(CreateRollSheetDto rollSheetDto, String userId, int eventId) throws EmptyFileException, BigFileException, NotValidExtensionException, IOException;
     List<RollSheet> getRollSheetListWithEventId(int eventId) throws NoSuchElementException;
     void deleteByEventId(int eventId);
}
