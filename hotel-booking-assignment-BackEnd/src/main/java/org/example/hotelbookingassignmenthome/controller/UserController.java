package org.example.hotelbookingassignmenthome.controller;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.dto.UserDto;
import org.example.hotelbookingassignmenthome.entity.User;
import org.example.hotelbookingassignmenthome.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UsersService usersService;

    @GetMapping("/list-user")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<UserDto>> getAllUser() {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getUserById(id));
    }

    @GetMapping("/user-booking-history/{id}")
    public ResponseEntity<List<UserBookingHistoryDto>> getUserBookingHistoryById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(usersService.getUserBookingHistoryById(id));
    }
}
