package com.bookshelf.bookshelf.controller;

import com.bookshelf.bookshelf.dto.SignupRequest;
import com.bookshelf.bookshelf.dto.LoginRequest;
import com.bookshelf.bookshelf.entity.User;
import com.bookshelf.bookshelf.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {

        if (userRepository.findByUsername(request.getUsername()) != null) {
            return "Username already exists";
        }

        User user = new User();
        user.setUsername(request.getUsername());
        String hashedPassword =passwordEncoder.encode(request.getPassword());

        user.setPasswordHash(hashedPassword);
        user.setCreatedAt(LocalDateTime.now());

        userRepository.save(user);

        return user.getUserId().toString();
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername());

        if (user == null) {
            return "User not found";
        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPasswordHash())) {

            return "Invalid password";
        }

        

        return user.getUserId().toString();
    }
}
