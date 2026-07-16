package com.jobboard.dto;

import com.jobboard.entity.Role;

public record RegisterRequest(
        String name,
        String email,
        String password,
        Role role
) {
}