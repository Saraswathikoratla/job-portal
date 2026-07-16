package com.jobboard.dto;

import com.jobboard.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

    private String token;
    Long userId;
    private Role role;
}