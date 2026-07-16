package com.jobboard.controller;

import com.jobboard.dto.ApplyJobRequest;
import com.jobboard.entity.Application;
import com.jobboard.service.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor

public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping
    public ResponseEntity<String> apply(
            @RequestBody ApplyJobRequest request
    ) {
        return ResponseEntity.ok(
                applicationService.apply(request)
        );
    }

    @GetMapping("/user/{userId}")
    public List<Application> getApplicationsByUser(
            @PathVariable Long userId
    )
    {
        return applicationService.getApplicationsByUser(userId);
    }
}