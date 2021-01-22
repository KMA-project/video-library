package com.kma.libraby.web.controller;

import com.kma.libraby.service.AccountService;
import com.kma.libraby.service.dto.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserResources {

    @Autowired
    AccountService accountService;

//    @GetMapping("/users")
//    public ResponseEntity<List<AccountDTO>> getUsers(){
//        return ResponseEntity.ok(accountService.getUsers());
//    }
}
