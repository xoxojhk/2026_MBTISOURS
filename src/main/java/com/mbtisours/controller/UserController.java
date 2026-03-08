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
}
