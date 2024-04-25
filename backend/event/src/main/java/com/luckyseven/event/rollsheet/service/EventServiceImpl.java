package com.luckyseven.event.rollsheet.service;

import com.github.f4b6a3.ulid.UlidCreator;
import com.luckyseven.event.common.exception.BigFileException;
import com.luckyseven.event.common.exception.EmptyFileException;
import com.luckyseven.event.common.exception.NotValidExtensionException;
import com.luckyseven.event.rollsheet.dto.CreateEventDto;
import com.luckyseven.event.rollsheet.dto.EditEventDto;
import com.luckyseven.event.rollsheet.dto.EventDto;
import com.luckyseven.event.rollsheet.entity.Event;
import com.luckyseven.event.rollsheet.entity.EventType;
import com.luckyseven.event.rollsheet.entity.Theme;
import com.luckyseven.event.rollsheet.repository.EventRepository;
import com.luckyseven.event.util.FileService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final FileService fileService;

    private final EventRepository eventRepository;

    @Override
    public EventDto createEvent(CreateEventDto eventDto, String userId) throws EmptyFileException, BigFileException, NotValidExtensionException, IOException {
        Event event = new Event();
        event.setUserId(userId);
        event.setPageUri(UlidCreator.getUlid().toString());
        event.setType(eventDto.getType());
        event.setTitle(eventDto.getTitle());
        event.setDate(eventDto.getDate());
        log.info("bannerImage: {}", eventDto.getBannerImage());
        //Amazon S3에 배너 이미지 업로드 후 경로 저장
        if (eventDto.getBannerImage() != null) {
            String[] bannerPath = fileService.uploadBannerImageToAmazonS3(eventDto.getBannerImage());
            event.setBanner(bannerPath[0]);
            event.setBannerThumbnail(bannerPath[1]);
        }
        event.setTheme(eventDto.getTheme());
        event.setVisibility(eventDto.getVisibility());
        event.setCreateTime(LocalDateTime.now());

        return EventDto.of(eventRepository.save(event));
    }

    @Override
    public Event getEvent(int eventId) {
        Event event = eventRepository.findByEventId(eventId);

        return event;
    }

    @Override
    public Event editEvent(EditEventDto eventDto, int eventId, String userId) {
        log.info("editEvent start: {}", eventDto);
        Event event = eventRepository.findByEventId(eventId);
        event.setDate(eventDto.getDate());
        event.setTitle(eventDto.getTitle());
        event.setVisibility(eventDto.getVisibility());
        // TODO: 대표이미지
        return eventRepository.save(event);
    }


}
