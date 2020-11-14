package com.kma.libraby.service;

import com.kma.libraby.dto.UserDTO;
import com.kma.libraby.models.User;
import com.kma.libraby.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService extends MapperUtils<User,UserDTO>{

    @Autowired
    UserRepository userRepository;
    public List<UserDTO> getUsers(){
        return userRepository.findAll().stream()
                .map(user -> convert(user,UserDTO.class))
                .collect(Collectors.toList());
    }
}
