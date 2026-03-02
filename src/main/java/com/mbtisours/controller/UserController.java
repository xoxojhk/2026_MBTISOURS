package com.mbtisours.controller;

import com.mbtisours.dto.*;
import com.mbtisours.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class UserController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @RequestBody LoginRequest request
    ) {
        LoginResponse response =
                userService.login(request.getEmail(), request.getPassword());

        return ResponseEntity.ok(response);
    }
}
