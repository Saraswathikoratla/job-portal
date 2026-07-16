package com.jobboard.service;

public interface JwtService {
    public String generateToken(String email);
    public String extractEmail(String token);
}
