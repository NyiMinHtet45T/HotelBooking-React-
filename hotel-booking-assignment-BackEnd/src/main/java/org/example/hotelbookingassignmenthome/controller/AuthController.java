package org.example.hotelbookingassignmenthome.controller;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dto.JwtResponse;
import org.example.hotelbookingassignmenthome.dto.LoginRequest;
import org.example.hotelbookingassignmenthome.dto.UserDto;
import org.example.hotelbookingassignmenthome.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    public final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserDto userDto) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.register(userDto));
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> loginUser(@RequestBody LoginRequest loginRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.login(loginRequest));
    }


}
