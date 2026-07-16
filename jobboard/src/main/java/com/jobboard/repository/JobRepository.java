package com.jobboard.repository;


import com.jobboard.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByLocationIgnoreCase(String location);

    List<Job> findByExperienceLessThanEqual(Integer experience);

    List<Job> findBySalaryGreaterThanEqual(Double salary);

    List<Job> findBySkillsContainingIgnoreCase(String skill);

    @Query("""
       SELECT DISTINCT j.company
       FROM Job j
       """)
    List<String> findAllCompanies();

}