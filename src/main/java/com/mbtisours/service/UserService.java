package com.mbtisours.service;

import com.mbtisours.dto.LoginResponse;
import com.mbtisours.dto.SignUpRequest;
import com.mbtisours.entity.User;
import com.mbtisours.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    /* 회원가입 서비스 */
    public void signup(SignUpRequest dto) {

        // 1️⃣ 이메일 중복 체크
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("이미 존재하는 이메일입니다.");
        }

        // 2️⃣ 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(dto.getPassword());

        // 3️⃣ 엔티티 생성
        User user = User.builder()
                .email(dto.getEmail())
                .password(encodedPassword)
                .name(dto.getName())
                .nickname(dto.getNickname())
                .build();

        // 4️⃣ 저장
        userRepository.save(user);
    }

    public LoginResponse login(String email, String rawPassword) {

        // 1️⃣ 이메일로 사용자 조회
        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new IllegalArgumentException("존재하지 않는 사용자입니다.")
                );

        // 2️⃣ 비밀번호 검증
        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }

        // 3️⃣ 로그인 성공 → 응답 DTO 반환
        return new LoginResponse(
                user.getId(),
                user.getEmail(),
                user.getNickname()
        );
    }
}
