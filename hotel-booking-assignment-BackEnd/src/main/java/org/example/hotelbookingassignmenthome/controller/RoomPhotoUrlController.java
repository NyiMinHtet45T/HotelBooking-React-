package org.example.hotelbookingassignmenthome.controller;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.entity.RoomPhotoUrl;
import org.example.hotelbookingassignmenthome.service.RoomPhotoUrlService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/roomPhoto")
@CrossOrigin("*")
public class RoomPhotoUrlController {

    private final RoomPhotoUrlService roomPhotoUrlService;

    @GetMapping("/roomPhoto")
    public List<RoomPhotoUrl> getRoomPhotoUrls() {
        return roomPhotoUrlService.findAllRoomPhotoUrls();
    }

    @GetMapping("/get-room/{id}")
    public RoomPhotoUrl getRoomPhotoUrl(@PathVariable Long id) {
        return roomPhotoUrlService.findRoomPhotoUrlById(id);
    }
}
