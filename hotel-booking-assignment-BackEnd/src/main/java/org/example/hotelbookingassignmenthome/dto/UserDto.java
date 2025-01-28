package org.example.hotelbookingassignmenthome.dto;

import lombok.Data;

@Data
public class UserDto {

    private Long userId;
    private String name;
    private String username;
    private String password;
    private String email;
    private String phoneNumber;
    private String roleName;
}
