package org.example.hotelbookingassignmenthome.dao;

import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserDao extends JpaRepository<User, Long> {

    @Query("""
        SELECT new org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto(u.username,u.email,r.roomType,r.roomPrice,r.roomMainUrl,bk.checkInDate,bk.checkOutDate,bk.totalNumberOfAdults) FROM User u
        JOIN u.bookingList bk JOIN bk.room r WHERE bk.id In (select bk.id from Booking bk where bk.user.id =:id)
""")
    Optional<List<UserBookingHistoryDto>> findUserBookingHistoryDtoById(Long id);

    Boolean existsUserByUsername(final String username);

    Boolean existsUserByEmail(final String email);

    @Query("SELECT u FROM User u WHERE u.username =:username OR u.email =:username")
    Optional<User> findByUsernameOrEmail(String username);
}
