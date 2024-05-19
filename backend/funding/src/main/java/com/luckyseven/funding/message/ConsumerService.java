package com.luckyseven.funding.message;

import com.luckyseven.funding.dto.FundingToNotificationDto;
import com.luckyseven.funding.dto.ProductInfoRes;
import com.luckyseven.funding.dto.Topic;
import com.luckyseven.funding.entity.Funding;
import com.luckyseven.funding.entity.FundingStatus;
import com.luckyseven.funding.repository.FundingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.NoSuchElementException;

@Slf4j
@Service
@RequiredArgsConstructor
public class ConsumerService {
    private final String PRODUCT_QUEUE = "product.queue";
    private final FundingRepository fundingRepository;
//    private final ProducerService producerService;

    @Transactional
    @RabbitListener(queues = PRODUCT_QUEUE)
    public void receiveCrawlingMessage(ProductInfoRes productRes) {
//        log.info(productRes.toString());


//        Topic topic = Topic.FUNDING_DISAPPROVED;
//        String userId = productRes.getUserId();
//        Integer fundingId = productRes.getFundingId();

        Funding funding = fundingRepository.findById(productRes.getFundingId())
                .orElseThrow(NoSuchElementException::new);

        switch (productRes.getStatus()){
            case 200:
//                topic=Topic.FUNDING_APPROVED;
                String productImageUrl = productRes.getProductImageUrl();
                funding.successCrawling(FundingStatus.APPROVE, productImageUrl, productRes.getProductName(), productRes.getProductPrice());
                break;
            case 400://상품 상세페이지를 다시 확인해주세요
                funding.failCrawling(FundingStatus.REJECT);
                break;
            case 401://지원하지 않는 쇼핑몰
                funding.failCrawling(FundingStatus.REJECT);
                break;
            case 500://크롤링 서버 에러
                funding.failCrawling(FundingStatus.REJECT);
                break;
            default:
                funding.failCrawling(FundingStatus.REJECT);

        }
        // 알림요청MQ
//        FundingToNotificationDto fundingStatusAlarmDto = new FundingToNotificationDto(userId,fundingId,topic);
//        producerService.sendFundingStatusMessage(fundingStatusAlarmDto);

    }
}
