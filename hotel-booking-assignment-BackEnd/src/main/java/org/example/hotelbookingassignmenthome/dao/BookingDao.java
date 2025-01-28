package org.example.hotelbookingassignmenthome.dao;

import org.example.hotelbookingassignmenthome.dto.AlreadyExitsBookings;
import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BookingDao extends JpaRepository<Booking, Long> {

    @Query("""
        SELECT new org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto(u.username,u.email,r.roomType,r.roomPrice,r.roomMainUrl,bk.checkInDate,bk.checkOutDate,bk.totalNumberOfAdults) FROM User u
        JOIN u.bookingList bk JOIN bk.room r WHERE bk.id In (select bk.id from Booking bk where bk.bookingConfirmationCode =:confirmationCode)
""")
    Optional<UserBookingHistoryDto> findBookingByConfirmationCode(String confirmationCode);

    @Query("select new org.example.hotelbookingassignmenthome.dto.AlreadyExitsBookings(bk.checkInDate,bk.checkOutDate) from Booking bk where bk.room.id =:id")
    List<AlreadyExitsBookings> findAlreadyExitsBooking(Long id);
}
