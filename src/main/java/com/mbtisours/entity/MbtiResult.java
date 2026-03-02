package com.mbtisours.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "mbti_test_result")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder

public class MbtiResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** 검사일 */
    @Column(nullable = false)
    private LocalDate testDate;

    /** 검사 버전 (예: v1, 2024, simple-12q 등) */
    @Column(nullable = false, length = 20)
    private String testVersion;

    /** MBTI 결과값 (예: INFP) */
    @Column(nullable = false, length = 4)
    private String result;
}
