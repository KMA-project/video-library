package com.kma.libraby.service;

import com.kma.libraby.domain.Account;
import com.kma.libraby.repository.AccountRepository;
import com.kma.libraby.service.dto.UserDTO;
import com.kma.libraby.service.mapper.MapperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService extends MapperUtils<Account, UserDTO> {

    @Autowired
    AccountRepository accountRepository;
    public List<UserDTO> getUsers(){
        return accountRepository.findAll().stream()
                .map(account -> convert(account,UserDTO.class))
                .collect(Collectors.toList());
    }
}
