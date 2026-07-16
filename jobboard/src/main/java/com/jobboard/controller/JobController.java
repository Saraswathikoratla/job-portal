package com.jobboard.controller;

import com.jobboard.dto.JobRequest;
import com.jobboard.entity.Job;
import com.jobboard.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService service;

    @PostMapping
    public Job createJob(@RequestBody JobRequest request) {
        return service.createJob(request);
    }

    @GetMapping
    public List<Job> getAllJobs(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String skill,
            @RequestParam(required = false) Integer experience,
            @RequestParam(required = false) Double salary
    ) {

        return service.searchJobs(
                location,
                skill,
                experience,
                salary
        );
    }

    @GetMapping("/{id}")
    public Job getJob(@PathVariable Long id) {
        return service.getJobById(id);
    }

    @PutMapping("/{id}")
    public Job updateJob(
            @PathVariable Long id,
            @RequestBody JobRequest request
    ) {
        return service.updateJob(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        service.deleteJob(id);
    }

    @GetMapping("/companies")
    public List<String> getCompanies() {
        return service.getAllCompanies();
    }
}