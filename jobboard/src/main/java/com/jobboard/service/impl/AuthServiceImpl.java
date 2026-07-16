package com.jobboard.service.impl;

import com.jobboard.dto.AuthResponse;
import com.jobboard.dto.LoginRequest;
import com.jobboard.dto.RegisterRequest;
import com.jobboard.repository.UserRepository;
import com.jobboard.service.AuthService;
import com.jobboard.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.jobboard.entity.User;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;


    @Override
    public AuthResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("User already exists");
        }

        User user = User.builder()
                .name(request.name())
                .email(request.email())
                .password(
                        passwordEncoder.encode(
                                request.password()
                        )
                )
                .role(request.role())
                .build();

        userRepository.save(user);

        String token =
                jwtService.generateToken(user.getEmail());

        return new AuthResponse(token,user.getId(),user.getRole());
    }

    @Override
    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(
                        request.getEmail())
                .orElseThrow(
                        () -> new RuntimeException("User not found")
                );

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        )) {
            throw new RuntimeException("Invalid password");
        }

        String token =
                jwtService.generateToken(user.getEmail());

        return new AuthResponse(token, user.getId(),user.getRole());
    }
}
