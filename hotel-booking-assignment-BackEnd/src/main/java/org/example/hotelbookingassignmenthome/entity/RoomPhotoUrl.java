package org.example.hotelbookingassignmenthome.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomPhotoUrl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roomPhotoUrl1;
    private String roomPhotoUrl2;
    private String roomPhotoUrl3;
    private String roomPhotoUrl4;

    public RoomPhotoUrl(String roomPhotoUrl1, String roomPhotoUrl2, String roomPhotoUrl3, String roomPhotoUrl4) {
        this.roomPhotoUrl1 = roomPhotoUrl1;
        this.roomPhotoUrl2 = roomPhotoUrl2;
        this.roomPhotoUrl3 = roomPhotoUrl3;
        this.roomPhotoUrl4 = roomPhotoUrl4;
    }
}
