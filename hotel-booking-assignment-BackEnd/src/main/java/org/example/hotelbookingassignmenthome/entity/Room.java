package org.example.hotelbookingassignmenthome.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roomType;
    private double roomPrice;
    private String roomMainUrl;
    private Integer population;
    private String roomNumber;
    private String roomDescription;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private RoomPhotoUrl roomPhotoUrl;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Booking> bookings = new ArrayList<>();

    public void addBooking(Booking booking) {
        bookings.add(booking);
    }

    public Room(String roomType, double roomPrice, String roomMainUrl, Integer population, String roomNumber, String roomDescription) {
        this.roomType = roomType;
        this.roomPrice = roomPrice;
        this.roomMainUrl = roomMainUrl;
        this.population = population;
        this.roomNumber = roomNumber;
        this.roomDescription = roomDescription;
    }
}
