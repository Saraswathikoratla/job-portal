package com.jobboard.service;

import com.jobboard.dto.ApplyJobRequest;
import com.jobboard.entity.Application;

import java.util.List;

public interface ApplicationService {
    public String apply(ApplyJobRequest request);
    public List<Application> getApplicationsByUser(
            Long userId
    );
}
