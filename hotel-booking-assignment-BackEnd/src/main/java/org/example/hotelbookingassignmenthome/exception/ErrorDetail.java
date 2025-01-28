package org.example.hotelbookingassignmenthome.exception;

import java.time.LocalDate;

public class ErrorDetail {

    private LocalDate errorDate;
    private String message;

    public ErrorDetail(LocalDate errorDate, String message, String description) {
        this.errorDate = errorDate;
        this.message = message;
    }
}
