package org.example.hotelbookingassignmenthome.dto;

import lombok.Data;

@Data
public class RoomDto {

    private Long id;
    private String roomType;
    private double roomPrice;
    private String roomMainUrl;
    private Integer population;
    private String roomNumber;
    private String roomDescription;
    private Long roomPhotoId;
}
