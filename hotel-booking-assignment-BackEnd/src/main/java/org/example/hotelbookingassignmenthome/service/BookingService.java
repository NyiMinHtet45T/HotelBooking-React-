package org.example.hotelbookingassignmenthome.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.Util.EntityUtil;
import org.example.hotelbookingassignmenthome.dao.BookingDao;
import org.example.hotelbookingassignmenthome.dao.RoomDao;
import org.example.hotelbookingassignmenthome.dao.UserDao;
import org.example.hotelbookingassignmenthome.dto.AlreadyExitsBookings;
import org.example.hotelbookingassignmenthome.dto.BookingDto;
import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.entity.Booking;
import org.example.hotelbookingassignmenthome.entity.Room;
import org.example.hotelbookingassignmenthome.entity.User;
import org.example.hotelbookingassignmenthome.exception.WrongDateException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingDao bookingDao;
    private final UserDao userDao;
    private final RoomDao roomDao;

    @Transactional
    public BookingDto saveBooking(BookingDto bookingDto) {
        if (bookingDto.getCheckOutDate().isBefore(bookingDto.getCheckInDate())) {
            throw new WrongDateException("CheckIn Date Must Be After CheckOut Date!");
        }
        User user = userDao.findById(bookingDto.getUserId()).orElseThrow(() -> new EntityNotFoundException("User Entity Not Found"));
        Room room = roomDao.findById(bookingDto.getRoomId()).orElseThrow(() -> new EntityNotFoundException("User Not Found"));
        List<Booking> existingBookings = room.getBookings();
        if(!checkRoomAvailable(existingBookings, bookingDto)) {
            throw new WrongDateException("Room Not Available For Selected Date Range!");
        }
        Booking booking = EntityUtil.toBooking(bookingDto);
        booking.setBookingConfirmationCode(EntityUtil.getConfirmationCode());
        booking.setUser(user);
        booking.setRoom(room);
        return EntityUtil.toBookingDto(bookingDao.save(booking));
    }

    public List<BookingDto> getAllBookings() {
        return bookingDao.findAll()
                .stream()
                .map(EntityUtil::toBookingDto)
                .toList();
    }

    public UserBookingHistoryDto getBookingByConfirmationCode(String confirmationCode) {
        return bookingDao.findBookingByConfirmationCode(confirmationCode)
                .orElseThrow(() -> new EntityNotFoundException("Booking with confirmation code " + confirmationCode + " not found"));
    }

    public void deleteBooking(Long id) {
        if (!bookingDao.existsById(id)) {
            throw new EntityNotFoundException("Booking with id " + id + " not found");
        }else {
            bookingDao.deleteById(id);
        }
    }

    public boolean checkRoomAvailable(List<Booking> existingBookings, BookingDto newBooking) {
        return existingBookings.stream()
                .noneMatch(existingBooking ->
                        newBooking.getCheckInDate().isBefore(existingBooking.getCheckOutDate())
                                && newBooking.getCheckOutDate().isAfter(existingBooking.getCheckInDate())
                );
    }

    public List<AlreadyExitsBookings> getAlreadyExitsBookings(Long id) {
        return bookingDao.findAlreadyExitsBooking(id);
    }

}
