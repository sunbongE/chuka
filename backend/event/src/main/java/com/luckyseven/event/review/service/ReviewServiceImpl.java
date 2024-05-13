package com.luckyseven.event.review.service;

import com.luckyseven.event.review.dto.CreateReviewDto;
import com.luckyseven.event.review.entity.Review;
import com.luckyseven.event.review.repository.ReviewQueryRepository;
import com.luckyseven.event.review.repository.ReviewRepository;
import com.luckyseven.event.util.ProfanityFilter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {

    private final ReviewRepository reviewRepository;
    private final ReviewQueryRepository reviewQueryRepository;
    private final ProfanityFilter profanityFilter;

    @Override
    public Review createReview(CreateReviewDto dto) {
        Review review = new Review();
        review.setContent(profanityFilter.changeWithDeafultDelimiter(dto.getContent()));
        review.setPhoneNumber(dto.getPhoneNumber());
        review.setCreateTime(LocalDateTime.now());
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getReviews() {

        return reviewQueryRepository.findByReview();
    }
}
