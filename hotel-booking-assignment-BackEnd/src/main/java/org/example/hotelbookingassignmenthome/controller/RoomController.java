package org.example.hotelbookingassignmenthome.controller;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dto.RoomByNumberAndDateAndTypeDto;
import org.example.hotelbookingassignmenthome.dto.RoomDto;
import org.example.hotelbookingassignmenthome.dto.RoomRequestObj;
import org.example.hotelbookingassignmenthome.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/room")
@RequiredArgsConstructor
@CrossOrigin("*")
public class RoomController {

    private final RoomService roomService;

    @PostMapping("/add-room")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<RoomDto> addRoom(@RequestBody RoomRequestObj roomRequestObj) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.saveRoom(roomRequestObj.getRoomDto(), roomRequestObj.getRoomPhotoUrl()));
    }

    @GetMapping("/list-room")
    public ResponseEntity<List<RoomDto>> getAllRooms() {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getAllRoom());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomDto> getRoomById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getRoomById(id));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<String> deleteRoomById(@PathVariable Long id) {
        roomService.deleteRoomById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Successfully deleted room");
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public ResponseEntity<RoomDto> updateRoom(@RequestBody RoomRequestObj roomRequestObj, @PathVariable Long id) {

        return ResponseEntity.status(HttpStatus.OK).body(roomService.updateRoom(roomRequestObj.getRoomDto(), roomRequestObj.getRoomPhotoUrl(), id));
    }

    @GetMapping("/all-available-room")
    public ResponseEntity<List<RoomDto>> getAllAvailableRooms() {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getAllAvailableRoom());
    }

    @PostMapping("/find-availableRoomByDateAndType")
    public ResponseEntity<List<RoomDto>> getAvailableRoomByDateAndType(@RequestBody RoomByNumberAndDateAndTypeDto roomByNumberAndDateAndTypeDto) {
        return ResponseEntity.status(HttpStatus.OK).body(roomService.getAllAvailableRoomByDateAndType(roomByNumberAndDateAndTypeDto));
    }
}
