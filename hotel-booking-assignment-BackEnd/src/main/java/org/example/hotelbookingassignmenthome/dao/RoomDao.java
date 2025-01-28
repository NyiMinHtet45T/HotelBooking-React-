package org.example.hotelbookingassignmenthome.dao;
import org.example.hotelbookingassignmenthome.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface RoomDao extends JpaRepository<Room, Long> {

    @Query("SELECT r FROM Room r WHERE r.id NOT IN (SELECT b.room.id FROM Booking b)")
    List<Room> findAllAvailableRoom();

    @Query("""
    SELECT r FROM Room r WHERE r.roomType LIKE %:type% AND r.roomNumber=:roomNumber AND r.id NOT IN (SELECT b.room.id FROM Booking b WHERE
    (b.checkInDate>=:checkInDate) AND (b.checkOutDate<=:checkOutDate))
""")
    List<Room> findAvailableRoomByDateAndTypeAndNumber(String roomNumber ,LocalDate checkInDate, LocalDate checkOutDate, String type);

    @Query("""
    SELECT r FROM Room r WHERE r.roomType LIKE %:type% AND r.id NOT IN (SELECT b.room.id FROM Booking b WHERE
    (b.checkInDate>=:checkInDate) AND (b.checkOutDate<=:checkOutDate))
""")
    List<Room> findAvailableRoomByDateAndType(LocalDate checkInDate, LocalDate checkOutDate, String type);
}
