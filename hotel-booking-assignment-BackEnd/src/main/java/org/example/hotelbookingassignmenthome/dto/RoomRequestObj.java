package org.example.hotelbookingassignmenthome.dto;

import lombok.Getter;
import lombok.Setter;
import org.example.hotelbookingassignmenthome.entity.RoomPhotoUrl;

@Getter
@Setter
public class RoomRequestObj {

    private RoomDto roomDto;
    private RoomPhotoUrl roomPhotoUrl;
}
