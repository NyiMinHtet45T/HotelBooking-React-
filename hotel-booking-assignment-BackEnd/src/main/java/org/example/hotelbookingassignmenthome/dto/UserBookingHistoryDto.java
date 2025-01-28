package org.example.hotelbookingassignmenthome.dto;

import java.time.LocalDate;


public record UserBookingHistoryDto(
         String userName,
         String email,
         String roomType,
         Double roomPrice,
         String roomPhotoMain,
         LocalDate checkInDate,
         LocalDate checkOutDate,
         int totalNumberOfAdults
) {




}
