package com.mbtisours.controller;

import com.mbtisours.dto.*;
import com.mbtisours.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {
        log.info("로그인 요청: {}", request.getEmail());
        log.info("로그인 요청: {}", request.getPassword());
        LoginResponse response =
                userService.login(request.getEmail(), request.getPassword());

        return ResponseEntity.ok(response);
    }

    // 회원가입 API 추가
    @PostMapping("/signup")
    public ResponseEntity<String> signup(
            @RequestBody SignUpRequest request
    ) {
        // 개발 단계에서만 확인하고 나중에 삭제
        log.info("회원가입 요청 - 이메일: {}, 이름: {}", request.getEmail(), request.getName());

        // userService에서 회원가입 로직 처리
        userService.signup(request);

        return ResponseEntity.ok("회원가입이 완료되었습니다.");
    }
}
