package org.example.hotelbookingassignmenthome.service;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dao.RoomPhotoUrlDao;
import org.example.hotelbookingassignmenthome.entity.RoomPhotoUrl;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomPhotoUrlService {

    private final RoomPhotoUrlDao roomPhotoUrlDao;

    public List<RoomPhotoUrl> findAllRoomPhotoUrls() {
        return roomPhotoUrlDao.findAll();
    }

    public RoomPhotoUrl findRoomPhotoUrlById(Long id) {
        return roomPhotoUrlDao.findRoomPhotoUrlById(id);
    }
}
