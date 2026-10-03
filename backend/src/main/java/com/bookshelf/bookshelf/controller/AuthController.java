package com.bookshelf.bookshelf.controller;

import com.bookshelf.bookshelf.dto.SignupRequest;
import com.bookshelf.bookshelf.dto.LoginRequest;
import com.bookshelf.bookshelf.dto.AuthResponse;
import com.bookshelf.bookshelf.entity.User;
import com.bookshelf.bookshelf.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final SecureRandom secureRandom = new SecureRandom();

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {

        if (userRepository.findByUsername(request.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        String hashedPassword =passwordEncoder.encode(request.getPassword());

        user.setPasswordHash(hashedPassword);
        user.setCreatedAt(LocalDateTime.now());
        String token = issueToken(user);
        userRepository.save(user);

        return ResponseEntity.ok(new AuthResponse(user.getUserId(), user.getUsername(), token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername());

        if (user == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPasswordHash())) {

            return ResponseEntity.status(401).body("Invalid password");
        }

        String token = issueToken(user);
        userRepository.save(user);
        return ResponseEntity.ok(new AuthResponse(user.getUserId(), user.getUsername(), token));
    }

    private String issueToken(User user) {
        byte[] tokenBytes = new byte[32];
        secureRandom.nextBytes(tokenBytes);
        String token = Base64.getUrlEncoder().withoutPadding().encodeToString(tokenBytes);
        user.setAuthTokenHash(hashToken(token));
        return token;
    }

    public static String hashToken(String token) {
        try {
            byte[] hash = MessageDigest.getInstance("SHA-256").digest(token.getBytes(java.nio.charset.StandardCharsets.UTF_8));
            return java.util.HexFormat.of().formatHex(hash);
        } catch (NoSuchAlgorithmException exception) {
            throw new IllegalStateException("SHA-256 is unavailable", exception);
        }
    }
}
