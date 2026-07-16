package com.jobboard.service;

import com.jobboard.dto.JobRequest;
import com.jobboard.entity.Job;

import java.util.List;

public interface JobService {

    Job createJob(JobRequest request);

    List<Job> getAllJobs();

    Job getJobById(Long id);

    Job updateJob(Long id, JobRequest request);

    void deleteJob(Long id);

    List<Job> searchJobs(
            String location,
            String skill,
            Integer experience,
            Double salary
    );
    List<String> getAllCompanies();
}