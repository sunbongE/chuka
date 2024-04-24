package com.luckyseven.event.rollsheet.service;

import com.github.f4b6a3.ulid.UlidCreator;
import com.luckyseven.event.rollsheet.dto.CreateEventDto;
import com.luckyseven.event.rollsheet.dto.EventDto;
import com.luckyseven.event.rollsheet.entity.Event;
import com.luckyseven.event.rollsheet.entity.EventType;
import com.luckyseven.event.rollsheet.entity.Theme;
import com.luckyseven.event.rollsheet.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    @Override
    public EventDto createEvent(CreateEventDto eventDto) {
        Event event = new Event();
        event.setUserId(eventDto.getUserId());
        event.setPageUri(UlidCreator.getUlid().toString());
        event.setType(EventType.valueOf(eventDto.getType()));
        event.setTitle(eventDto.getTitle());
        event.setDate(eventDto.getDate());
        event.setBanner(eventDto.getBanner());
        // 썸네일
        //  event.setBannerThumbnail();
        event.setTheme(Theme.valueOf(eventDto.getTheme()));
        event.setVisibility(eventDto.getVisibility());
        event.setCreateTime(LocalDateTime.now());

        return EventDto.of(eventRepository.save(event));
    }


}
