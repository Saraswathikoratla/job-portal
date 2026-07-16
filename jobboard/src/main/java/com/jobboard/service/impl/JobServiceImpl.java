package com.jobboard.service.impl;

import com.jobboard.dto.JobRequest;
import com.jobboard.entity.Job;
import com.jobboard.repository.JobRepository;
import com.jobboard.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobServiceImpl implements JobService {

    private final JobRepository repository;

    @Override
    public Job createJob(JobRequest request) {

        Job job = Job.builder()
                .title(request.getTitle())
                .company(request.getCompany())
                .location(request.getLocation())
                .skills(request.getSkills())
                .experience(request.getExperience())
                .salary(request.getSalary())
                .jobType(request.getJobType())
                .description(request.getDescription())
                .build();

        return repository.save(job);
    }

    @Override
    public List<Job> getAllJobs() {
        return repository.findAll();
    }

    @Override
    public Job getJobById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }

    @Override
    public Job updateJob(Long id, JobRequest request) {

        Job job = getJobById(id);

        job.setTitle(request.getTitle());
        job.setCompany(request.getCompany());
        job.setLocation(request.getLocation());
        job.setSkills(request.getSkills());
        job.setExperience(request.getExperience());
        job.setSalary(request.getSalary());
        job.setJobType(request.getJobType());
        job.setDescription(request.getDescription());

        return repository.save(job);
    }

    @Override
    public void deleteJob(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Job> searchJobs(
            String location,
            String skill,
            Integer experience,
            Double salary
    ) {

        if (location != null) {
            return repository.findByLocationIgnoreCase(location);
        }

        if (skill != null) {
            return repository.findBySkillsContainingIgnoreCase(skill);
        }

        if (experience != null) {
            return repository.findByExperienceLessThanEqual(experience);
        }

        if (salary != null) {
            return repository.findBySalaryGreaterThanEqual(salary);
        }

        return repository.findAll();
    }

    @Override
    public List<String> getAllCompanies() {
        return repository.findAllCompanies();
    }
}