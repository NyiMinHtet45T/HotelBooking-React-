package org.example.hotelbookingassignmenthome.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class UserNameAlreadyExistException extends ResponseStatusException {

    public UserNameAlreadyExistException() {
        super(HttpStatus.BAD_REQUEST, "Username already exists");
    }
}
