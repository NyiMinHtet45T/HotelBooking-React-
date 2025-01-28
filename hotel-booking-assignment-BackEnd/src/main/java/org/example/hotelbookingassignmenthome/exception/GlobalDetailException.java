package org.example.hotelbookingassignmenthome.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDate;

@RestControllerAdvice
public class GlobalDetailException extends ResponseEntityExceptionHandler {

    public ResponseEntity<ErrorDetail> handleAllExceptions(Exception ex, WebRequest webRequest) {
        ErrorDetail errorDetail = new ErrorDetail(LocalDate.now(), ex.getMessage() + "Hello", webRequest.getDescription(false));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDetail);
    }
}
