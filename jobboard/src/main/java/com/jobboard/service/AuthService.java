package com.jobboard.service;

import com.jobboard.dto.AuthResponse;
import com.jobboard.dto.LoginRequest;
import com.jobboard.dto.RegisterRequest;

public interface AuthService {
    public AuthResponse register(RegisterRequest request);
    public AuthResponse login(LoginRequest request);
}
