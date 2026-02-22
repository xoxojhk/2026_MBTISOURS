package com.mbtisours.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  /**
   * Spring Security 기본 설정
   * 모든 요청을 인증 없이 허용 (추후 보안 정책 추가 예정)
   * CSRF 비활성화 (REST API 환경)
   * @param http
   * @return
   * @throws Exception
   */
  @Bean
  SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests((auth -> auth.anyRequest().permitAll())
    );
    return http.build();
  }

  /**
   * 비밀번호 암호화
   * BCrypt 알고리즘 사용
   * @return
   */
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
