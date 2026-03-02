package com.mbtisours.repository;

import com.mbtisours.entity.MbtiResult;
import com.mbtisours.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MbtiResultRepository extends JpaRepository<MbtiResult, Long> {

    /** 사용자 전체 검사 이력 */
    List<MbtiResult> findByUser(User user);

    /** 가장 최근 MBTI 결과 */
    Optional<MbtiResult> findTopByUserOrderByTestDateDesc(User user);
}
