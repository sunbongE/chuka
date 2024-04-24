package com.luckyseven.funding.service;

import com.luckyseven.funding.dto.FundingCreateReq;

public interface FundingService {
    int createFunding(FundingCreateReq dto);
}
