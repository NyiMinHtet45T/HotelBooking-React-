package org.example.hotelbookingassignmenthome.dto;

import java.time.LocalDate;

public record AlreadyExitsBookings(
        LocalDate checkInDate,
        LocalDate checkOutDate
) {

}
