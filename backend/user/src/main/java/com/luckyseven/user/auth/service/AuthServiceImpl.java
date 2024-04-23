package com.luckyseven.user.auth.service;

import com.luckyseven.user.auth.dto.TokenDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.HashMap;
import java.util.Map;

@Slf4j
//@Transactional
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    @Value("${kakao.api.rest.key}")
    private String apiKey;

    @Value("${kakao.api.oauth.token}")
    private String getTokenUri;

    @Value("${kakao.api.user.me}")
    private String getUserInfoUri;

    @Value(("${kakao.api.redirect}"))
    private String redirectUri;

    public String test(String test) {
        return test;
    }

    @Override
    public void getToken(String code) {
        // https://kauth.kakao.com/oauth/token
        // body grant_type client_id redirect_uri code

        // oauth/token으로 요청
        RestClient restClient = RestClient.create();
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("grant_type", "authorization_code");
        requestBody.put("client_id", apiKey);
        requestBody.put("redirect_uri", redirectUri);
        requestBody.put("code", code);

        RestClient.ResponseSpec response = restClient.post().uri(getTokenUri).body(requestBody).retrieve();

        ResponseEntity<?> responseEntity = response.toEntity(String.class);
        TokenDto responseBody = (TokenDto) responseEntity.getBody();
        HttpStatusCode statusCode = responseEntity.getStatusCode();

        log.info("responseBody: {}", responseBody);
        log.info("statusCode: {}", statusCode);

//        ResponseEntity<?> responseEntity = response.toEntity(String.class);
//        String responseBody = responseEntity.getBody().toString();
//        HttpStatusCode statusCode = responseEntity.getStatusCode();

//        Member sendMember = memberRepository.findById(sendMemberId).get();
//        Account sendMemberAccount =
//                accountRepository.findByMemberAndIsPrimaryAccountIsTrue(sendMember);
//
//        Member receiveMember = memberRepository.findById(receiveMemberId).get();
//        Account receiveMemberAccount =
//                accountRepository.findByMemberAndIsPrimaryAccountIsTrue(receiveMember);
//
//        ReqHeader reqHeader = createHeader(sendMember.getUserKey(), transferUri);
//
//        Map<String, Object> requestBody = new HashMap<>();
//        requestBody.put("Header", reqHeader);
//        requestBody.put("depositBankCode", receiveMemberAccount.getBankCode());
//        requestBody.put("depositAccountNo", receiveMemberAccount.getAccountNo());
//        requestBody.put("depositTransactionSummary", sendMember.getName());
//        requestBody.put("transactionBalance", transactionBalance);
//        requestBody.put("withdrawalBankCode", sendMemberAccount.getBankCode());
//        requestBody.put("withdrawalAccountNo", sendMemberAccount.getAccountNo());
//        requestBody.put("withdrawalTransactionSummary", receiveMember.getName());
//
//        RestClient.ResponseSpec response =
//                restClient.post().uri(transferUri).body(requestBody).retrieve();
//        ResponseEntity<?> responseEntity = response.toEntity(String.class);
//        String responseBody = responseEntity.getBody().toString();
//        HttpStatusCode statusCode = responseEntity.getStatusCode();
    }
}
