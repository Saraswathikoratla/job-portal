package com.jobboard.service.impl;

import com.jobboard.dto.ApplyJobRequest;
import com.jobboard.entity.Application;
import com.jobboard.entity.Job;
import com.jobboard.entity.User;
import com.jobboard.repository.ApplicationRepository;
import com.jobboard.repository.JobRepository;
import com.jobboard.repository.UserRepository;
import com.jobboard.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import  com.jobboard.entity.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationServiceImpl implements ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final UserRepository userRepository;
    private final JobRepository jobRepository;
@Override
    public String apply(ApplyJobRequest request) {

        if (applicationRepository.existsByUserIdAndJobId(
                request.userId(),
                request.jobId()
        )) {
            return "Already applied";
        }

        User user = userRepository.findById(request.userId())
                .orElseThrow();

        Job job = jobRepository.findById(request.jobId())
                .orElseThrow();

        Application application = Application.builder()
                .user(user)
                .job(job)
                .status("APPLIED")
                .appliedAt(LocalDateTime.now())
                .build();

        applicationRepository.save(application);

        return "Applied successfully";
    }

    @Override
    public List<Application> getApplicationsByUser(
            Long userId
    ) {
        return applicationRepository
                .findByUserId(userId);
    }
}