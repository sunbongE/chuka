package com.luckyseven.funding.schedule;

import com.luckyseven.funding.dto.FundingToNotificationDto;
import com.luckyseven.funding.dto.Topic;
import com.luckyseven.funding.entity.Funding;
import com.luckyseven.funding.entity.FundingResult;
import com.luckyseven.funding.entity.FundingStatus;
import com.luckyseven.funding.entity.Sponsor;
import com.luckyseven.funding.message.ProducerService;
import com.luckyseven.funding.repository.FundingRepository;
import com.luckyseven.funding.repository.SponsorRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.HashSet;
import java.util.Set;

@Slf4j
@Service
@RequiredArgsConstructor
public class FundingScheduler {
    private final FundingRepository fundingRepository;
    private final SponsorRepository sponsorRepository;
    private final ProducerService producerService;

    @Scheduled(cron = "0 0 0 * * ?")
    @Transactional
    public void updateFundingResults() {
        LocalDate now = LocalDate.now();
        List<Funding> fundings = fundingRepository.findByResultAndEndDateBefore(FundingResult.ONGOING, now);
        for (Funding funding : fundings) {
            funding.setResult(FundingResult.COMPLETE);
        }
        fundingRepository.saveAll(fundings);
    }
}
