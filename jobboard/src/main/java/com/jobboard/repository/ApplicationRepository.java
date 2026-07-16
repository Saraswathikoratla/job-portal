package com.jobboard.repository;

import com.jobboard.entity.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository
        extends JpaRepository<Application, Long> {

    boolean existsByUserIdAndJobId(
            Long userId,
            Long jobId
    );
    List<Application> findByUserId(Long userId);
}