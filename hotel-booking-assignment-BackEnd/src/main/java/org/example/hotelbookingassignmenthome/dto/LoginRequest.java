package org.example.hotelbookingassignmenthome.dto;

public record LoginRequest(
        String usernameOrEmail,
        String password
) {
}
