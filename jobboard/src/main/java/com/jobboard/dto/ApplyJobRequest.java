package com.jobboard.dto;

public record ApplyJobRequest(
        Long userId,
        Long jobId
) {}