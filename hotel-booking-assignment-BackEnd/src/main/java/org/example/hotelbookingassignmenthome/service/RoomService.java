package org.example.hotelbookingassignmenthome.service;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.Util.EntityUtil;
import org.example.hotelbookingassignmenthome.dao.RoomDao;
import org.example.hotelbookingassignmenthome.dao.RoomPhotoUrlDao;
import org.example.hotelbookingassignmenthome.dto.RoomByNumberAndDateAndTypeDto;
import org.example.hotelbookingassignmenthome.dto.RoomDto;
import org.example.hotelbookingassignmenthome.entity.Room;
import org.example.hotelbookingassignmenthome.entity.RoomPhotoUrl;
import org.example.hotelbookingassignmenthome.exception.IdNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomDao roomDao;
    private final RoomPhotoUrlDao roomPhotoUrlDao;
    private final EntityUtil entityUtil;

    public RoomDto saveRoom(RoomDto roomDto, RoomPhotoUrl roomPhotoUrl) {
        Room room = EntityUtil.toRoom(roomDto);
        room.setRoomPhotoUrl(roomPhotoUrl);
        return entityUtil.toRoomDto(roomDao.save(room));
    }

    public List<RoomDto> getAllRoom() {
        return roomDao.findAll()
                .stream()
                .map(entityUtil::toRoomDto)
                .toList();
    }

    public RoomDto getRoomById(Long id) {
        return entityUtil.toRoomDto(roomDao.findById(id)
                .orElseThrow(() -> new IdNotFoundException(id)));
    }

    public void deleteRoomById(Long id) {
        if (!roomDao.existsById(id)) {
            throw new IdNotFoundException(id);
        }else {
            roomDao.deleteById(id);
        }
    }

    @Transactional
    public RoomDto updateRoom(RoomDto roomDto, RoomPhotoUrl roomPhotoUrl, Long id) {
        if(!roomDao.existsById(id)) {
            throw new IdNotFoundException(id);
        }
        Room room = roomDao.findById(id).orElseThrow(() -> new IdNotFoundException(id));
        room.setRoomType(roomDto.getRoomType());
        room.setRoomPrice(roomDto.getRoomPrice());
        room.setRoomMainUrl(roomDto.getRoomMainUrl());
        room.setPopulation(roomDto.getPopulation());
        room.setRoomNumber(roomDto.getRoomNumber());
        room.setRoomDescription(roomDto.getRoomDescription());

        RoomPhotoUrl roomPhotoUrl1 = room.getRoomPhotoUrl();
        roomPhotoUrl1.setRoomPhotoUrl1(roomPhotoUrl.getRoomPhotoUrl1());
        roomPhotoUrl1.setRoomPhotoUrl2(roomPhotoUrl.getRoomPhotoUrl2());
        roomPhotoUrl1.setRoomPhotoUrl3(roomPhotoUrl.getRoomPhotoUrl3());
        roomPhotoUrl1.setRoomPhotoUrl4(roomPhotoUrl.getRoomPhotoUrl4());
        return entityUtil.toRoomDto(roomDao.save(room));
    }

    public List<RoomDto> getAllAvailableRoom() {
        return roomDao.findAllAvailableRoom()
                .stream()
                .map(entityUtil::toRoomDto)
                .toList();
    }

    public List<RoomDto> getAllAvailableRoomByDateAndType(RoomByNumberAndDateAndTypeDto roomByNumberAndDateAndTypeDto) {
        String roomNumber = roomByNumberAndDateAndTypeDto.getRoomNumber();
        LocalDate checkInDate = roomByNumberAndDateAndTypeDto.getCheckInDate();
        LocalDate checkOutDate = roomByNumberAndDateAndTypeDto.getCheckOutDate();
        String type = roomByNumberAndDateAndTypeDto.getType();
         if(roomNumber == null || roomNumber.isBlank()) {
             return roomDao.findAvailableRoomByDateAndType(checkInDate, checkOutDate, type).stream().map(entityUtil::toRoomDto).toList();
         }
         return roomDao.findAvailableRoomByDateAndTypeAndNumber(roomNumber, checkInDate, checkOutDate, type).stream().map(entityUtil::toRoomDto).toList();
    }


}
