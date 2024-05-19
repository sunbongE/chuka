package com.luckyseven.funding.message;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.luckyseven.funding.dto.FundingToNotificationDto;
import com.luckyseven.funding.dto.ProductCrawlingReq;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class ProducerService {
    private final RabbitTemplate rabbitTemplate;
    private final ObjectMapper objectMapper;
    @Value("${rabbitmq.crawling.exchange}")
    private String CRAWLING_EXCHANGE;

    @Value("${rabbitmq.funding_to_notification.exchange}")
    private String FUNDINGTONOTIFICATION_EXCHANGE;

    public void sendCrawlingMessage(int fundingId, String productUrl, String userId) {
        ProductCrawlingReq productCrawlingReq = new ProductCrawlingReq(fundingId, productUrl, userId);
        log.info(productCrawlingReq.toString());
        rabbitTemplate.convertAndSend(CRAWLING_EXCHANGE, "", productCrawlingReq);
    }

    public void sendFundingStatusMessage(FundingToNotificationDto fundingToNotificationDto){

        rabbitTemplate.convertAndSend(FUNDINGTONOTIFICATION_EXCHANGE,"",fundingToNotificationDto);
    }

}