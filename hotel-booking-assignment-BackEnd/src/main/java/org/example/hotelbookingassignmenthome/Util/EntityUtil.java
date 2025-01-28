package org.example.hotelbookingassignmenthome.Util;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dto.BookingDto;
import org.example.hotelbookingassignmenthome.dto.RoomDto;
import org.example.hotelbookingassignmenthome.dto.UserDto;
import org.example.hotelbookingassignmenthome.entity.Booking;
import org.example.hotelbookingassignmenthome.entity.Role;
import org.example.hotelbookingassignmenthome.entity.Room;
import org.example.hotelbookingassignmenthome.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class EntityUtil {

    private final PasswordEncoder passwordEncoder;

    private static final String ALPHANUMERIC_STRING = "ABCDEFGHIJKLMNOPQRSTUVWHYZ0123456789";

    private static final SecureRandom random = new SecureRandom();

    public static String getConfirmationCode() {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            sb.append(ALPHANUMERIC_STRING.charAt(random.nextInt(ALPHANUMERIC_STRING.length())));
        }
        return sb.toString();
    }

    public UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getId());
        userDto.setName(user.getName());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(passwordEncoder.encode(user.getPassword()));
        userDto.setEmail(user.getEmail());
        userDto.setPhoneNumber(user.getPhoneNumber());

        if(user.getRoles() != null) {
            userDto.setRoleName(user.getRoles().stream().map(Role::getName).collect(Collectors.joining(",")));
        }
        return userDto;
    }

    public static User toUser(UserDto userDto) {
        User user = new User();
        user.setId(userDto.getUserId());
        user.setName(userDto.getName());
        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        user.setPhoneNumber(userDto.getPhoneNumber());
        return user;
    }

    @Transactional
    public  RoomDto toRoomDto(Room room) {
        RoomDto roomDto = new RoomDto();
        roomDto.setId(room.getId());
        roomDto.setRoomType(room.getRoomType());
        roomDto.setRoomPrice(room.getRoomPrice());
        roomDto.setRoomMainUrl(room.getRoomMainUrl());
        roomDto.setPopulation(room.getPopulation());
        roomDto.setRoomNumber(room.getRoomNumber());
        roomDto.setRoomDescription(room.getRoomDescription());
        if(room.getRoomPhotoUrl().getId() != null) {
            roomDto.setRoomPhotoId(room.getRoomPhotoUrl().getId());
        }
        return roomDto;
    }


    public static Room toRoom(RoomDto roomDto) {
        Room room = new Room();
        room.setId(roomDto.getId());
        room.setRoomType(roomDto.getRoomType());
        room.setRoomPrice(roomDto.getRoomPrice());
        room.setRoomMainUrl(roomDto.getRoomMainUrl());
        room.setPopulation(roomDto.getPopulation());
        room.setRoomNumber(roomDto.getRoomNumber());
        room.setRoomDescription(roomDto.getRoomDescription());
        return room;
    }

    public static BookingDto toBookingDto(Booking booking) {
        BookingDto bookingDto = new BookingDto();
        bookingDto.setId(booking.getId());
        bookingDto.setCheckInDate(booking.getCheckInDate());
        bookingDto.setCheckOutDate(booking.getCheckOutDate());
        bookingDto.setNumberOfAdults(booking.getNumberOfAdults());
        bookingDto.setNumberOfChildren(booking.getNumberOfChildren());
        bookingDto.setTotalNumberOfAdults(booking.getTotalNumberOfAdults());
        bookingDto.setBookingConfirmationCode(booking.getBookingConfirmationCode());

        if(booking.getUser().getId() != null) {
             bookingDto.setUserId(booking.getUser().getId());
        }
        if(booking.getRoom().getId() != null) {
            bookingDto.setRoomId(booking.getRoom().getId());
        }
        return bookingDto;
    }

    public static Booking toBooking(BookingDto bookingDto) {
        Booking booking = new Booking();
        booking.setId(bookingDto.getId());
        booking.setCheckInDate(bookingDto.getCheckInDate());
        booking.setCheckOutDate(bookingDto.getCheckOutDate());
        booking.setNumberOfAdults(bookingDto.getNumberOfAdults());
        booking.setNumberOfChildren(bookingDto.getNumberOfChildren());
        return booking;
    }
}
