package com.luckyseven.funding.repository;

import com.luckyseven.funding.entity.Funding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundingRepository extends JpaRepository<Funding, Integer> {
}
