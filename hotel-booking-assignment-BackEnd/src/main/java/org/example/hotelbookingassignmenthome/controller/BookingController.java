package org.example.hotelbookingassignmenthome.controller;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dto.AlreadyExitsBookings;
import org.example.hotelbookingassignmenthome.dto.BookingDto;
import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.service.BookingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BookingController {

    private final BookingService bookingService;

    @PostMapping("/add")
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
    public ResponseEntity<BookingDto> addBooking(@RequestBody BookingDto bookingDto) {
        return ResponseEntity.status(HttpStatus.OK).body(bookingService.saveBooking(bookingDto));
    }

    @GetMapping("/list-booking")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<List<BookingDto>> getAllBookings() {
        return ResponseEntity.status(HttpStatus.OK).body(bookingService.getAllBookings());
    }

    @GetMapping("/confirmationCode/{confirmationCode}")
    public  ResponseEntity<UserBookingHistoryDto> getBookingByConfirmationCode(@PathVariable String confirmationCode) {
        return ResponseEntity.status(HttpStatus.OK).body(bookingService.getBookingByConfirmationCode(confirmationCode));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN') or hasAuthority('ROLE_USER')")
    public ResponseEntity<String> deleteBookingById(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Successfully deleted booking");
    }

    @GetMapping("/AlreadyBk/{id}")
    public ResponseEntity<List<AlreadyExitsBookings>> getAlreadyExitsBooking(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(bookingService.getAlreadyExitsBookings(id));
    }
}
