package org.example.hotelbookingassignmenthome.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.example.hotelbookingassignmenthome.Util.EntityUtil;
import org.example.hotelbookingassignmenthome.dao.UserDao;
import org.example.hotelbookingassignmenthome.dto.JwtResponse;
import org.example.hotelbookingassignmenthome.dto.LoginRequest;
import org.example.hotelbookingassignmenthome.dto.UserDto;
import org.example.hotelbookingassignmenthome.entity.Role;
import org.example.hotelbookingassignmenthome.entity.User;
import org.example.hotelbookingassignmenthome.exception.EmailAlreadyExistException;
import org.example.hotelbookingassignmenthome.exception.UserNameAlreadyExistException;
import org.example.hotelbookingassignmenthome.jwt.JwtProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserDao userDao;
    private final JwtProvider jwtProvider;

    @Transactional
    public String register(UserDto userDto) {
        if(userDao.existsUserByUsername(userDto.getUsername())) {
            throw new EmailAlreadyExistException();
        }
        if(userDao.existsUserByEmail(userDto.getEmail())) {
            throw new UserNameAlreadyExistException();
        }
        Role roles = new Role(null,"ROLE_USER");

        User user = EntityUtil.toUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        user.addRole(roles);
        userDao.save(user);
        return "Successfully Created User";
    }

    public JwtResponse login(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.usernameOrEmail(),loginRequest.password()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        JwtResponse jwtResponse = new JwtResponse();
        jwtResponse.setToken(jwtProvider.generateToken(authentication));
        User user = userDao.findByUsernameOrEmail(authentication.getName()).orElseThrow(() -> new EntityNotFoundException("User Not Found"));
        jwtResponse.setUserId(user.getId());
        jwtResponse.setUserRole(user.getRoles().stream().map(Role::getName).findFirst().orElse("ROLE_USER"));
        return jwtResponse;
    }


}
