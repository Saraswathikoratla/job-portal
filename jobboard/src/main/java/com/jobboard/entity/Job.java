package com.jobboard.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "jobs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String company;

    private String location;

    private String skills;

    private Integer experience;

    private Double salary;

    private String jobType;

    @Column(length = 2000)
    private String description;
}