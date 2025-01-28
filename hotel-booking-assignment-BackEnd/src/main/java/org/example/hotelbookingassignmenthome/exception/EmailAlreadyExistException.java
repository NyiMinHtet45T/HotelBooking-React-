package org.example.hotelbookingassignmenthome.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class EmailAlreadyExistException extends ResponseStatusException {

    public EmailAlreadyExistException() {
        super(HttpStatus.BAD_REQUEST, "Email already exist");
    }
}
