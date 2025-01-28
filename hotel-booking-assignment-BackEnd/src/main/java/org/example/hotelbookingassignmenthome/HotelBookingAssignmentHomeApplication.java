package org.example.hotelbookingassignmenthome;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.dao.*;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

@SpringBootApplication
@RequiredArgsConstructor
public class HotelBookingAssignmentHomeApplication {

    private final BookingDao bookingDao;
    private final UserDao userDao;
    private final RoomDao roomDao;
    private final PasswordEncoder passwordEncoder;

    @Bean
    @Transactional  @Profile("dev")
    public ApplicationRunner init() {
        return args -> {

//            Role admin = new Role(null,"ROLE_ADMIN");
//            Role user = new Role(null,"ROLE_USER");

//            User nyiMinHtet = new User("NyiMin", "NyiMinHtet", passwordEncoder.encode("1234"), "Nyi@gmail.com", "098476563");
//            User userAdmin = new User("admin", "admin", passwordEncoder.encode("1234"), "admin@gmail.com", "098479832");

//            User maMa = new User("MaMa", "MaMaThazin", passwordEncoder.encode("1234"), "MaMa@gmail.com", "09876326");
//            User hlaHla = new User("HlaHla", "HlaHlaChit", passwordEncoder.encode("1234"), "HlaHla@gmail.com", "09382638487");
//            User myaMya = new User("Moe", "MoeMoeKhaing", passwordEncoder.encode("1234"), "MoeMoe@gmail.com", "0931838487");

//            maMa.addRole(user);
//            userAdmin.addRole(admin);
//            nyiMinHtet.addRole(admin);
//            hlaHla.addRole(user);
//            myaMya.addRole(user);

//            userDao.save(maMa);
//            userDao.save(userAdmin);
//            userDao.save(nyiMinHtet);
//            userDao.save(hlaHla);
//            userDao.save(myaMya);

//            RoomPhotoUrl url1 = new RoomPhotoUrl("http123","http123","http123","http123");
//            RoomPhotoUrl url2 = new RoomPhotoUrl("http123","http123","http123","http123");
//
//            Room room1 = new Room("DoubleBed", 3000.0,"Http123", 2, "101","Full of love");
//            Room room2 = new Room("SignalBed", 1000.0,"Http123", 1, "102","Full of Pop");

//            room1.setRoomPhotoUrl(url1);
//            room2.setRoomPhotoUrl(url2);

//            roomDao.save(room1);
//            roomDao.save(room2);

//            Booking booking1 = new Booking();
//            booking1.setCheckInDate(LocalDate.of(2024, 9, 12));
//            booking1.setCheckOutDate(LocalDate.of(2024, 11, 13));
//            booking1.setNumberOfAdults(2);
//            booking1.setNumberOfChildren(2);
//            booking1.setBookingConfirmationCode("38823828382");
//
//            Booking booking2 = new Booking();
//            booking2.setCheckInDate(LocalDate.of(2023, 5, 10));
//            booking2.setCheckOutDate(LocalDate.of(2024, 12, 23));
//            booking2.setNumberOfAdults(4);
//            booking2.setNumberOfChildren(2);
//            booking2.setBookingConfirmationCode("388388328382");

//            maMa.addBooking(booking1);
//            booking1.setUser(maMa);
//            booking1.setRoom(room1);
//            room1.addBooking(booking1);

//            myaMya.addBooking(booking2);
//            booking2.setUser(myaMya);
//            booking2.setRoom(room2);
//            room2.addBooking(booking2);

//            bookingDao.save(booking1);
//            bookingDao.save(booking2);

        };
    }


    public static void main(String[] args) {
        SpringApplication.run(HotelBookingAssignmentHomeApplication.class, args);
    }

}
