package com.jobboard.dto;

import lombok.Data;

@Data
public class JobRequest {

    private String title;

    private String company;

    private String location;

    private String skills;

    private Integer experience;

    private Double salary;

    private String jobType;

    private String description;
}