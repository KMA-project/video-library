package com.kma.libraby.service;

import com.kma.libraby.domain.UserEntity;
import com.kma.libraby.repository.UserRepository;
import com.kma.libraby.service.dto.UserDTO;
import com.kma.libraby.service.mapper.MapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService extends MapperUtils<UserEntity, UserDTO> {

    @Autowired
    UserRepository userRepository;
    public List<UserDTO> getUsers(){
        return userRepository.findAll().stream()
                .map(userEntity -> convert(userEntity,UserDTO.class))
                .collect(Collectors.toList());
    }
}
