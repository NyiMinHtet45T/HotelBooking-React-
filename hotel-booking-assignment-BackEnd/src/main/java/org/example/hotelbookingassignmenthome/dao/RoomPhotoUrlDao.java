package org.example.hotelbookingassignmenthome.dao;

import org.example.hotelbookingassignmenthome.entity.RoomPhotoUrl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RoomPhotoUrlDao extends JpaRepository<RoomPhotoUrl, Integer> {

    @Query("""
    SELECT rp FROM RoomPhotoUrl rp WHERE rp.id =:id
""")
    RoomPhotoUrl findRoomPhotoUrlById(Long id);
}
