package org.example.hotelbookingassignmenthome.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class RoomByNumberAndDateAndTypeDto {

    private String roomNumber;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String type;
}
