package org.example.hotelbookingassignmenthome.service;

import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.Util.EntityUtil;
import org.example.hotelbookingassignmenthome.dao.UserDao;
import org.example.hotelbookingassignmenthome.dto.UserBookingHistoryDto;
import org.example.hotelbookingassignmenthome.dto.UserDto;
import org.example.hotelbookingassignmenthome.exception.IdNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsersService {

    private final UserDao userDao;
    private final EntityUtil entityUtil;

    public List<UserDto> getAllUsers() {
        return userDao.findAll()
                .stream()
                .map(entityUtil::toUserDto)
                .toList();
    }

    public UserDto getUserById(Long id) {
        return entityUtil.toUserDto(userDao.findById(id)
                .orElseThrow((() -> new IdNotFoundException(id))));
    }

    public void deleteUserById(Long id) {
        if(!userDao.existsById(id)) {
            throw new IdNotFoundException(id);
        }else {
            userDao.deleteById(id);
        }
    }

    public List<UserBookingHistoryDto> getUserBookingHistoryById(Long id) {
        return userDao.findUserBookingHistoryDtoById(id)
                .orElseThrow(() -> new IdNotFoundException(id));
    }
}
