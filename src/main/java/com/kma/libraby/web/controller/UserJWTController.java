package com.kma.libraby.web.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.kma.libraby.security.jwt.JWTFilter;
import com.kma.libraby.security.jwt.TokenProvider;
import com.kma.libraby.service.AccountService;
import com.kma.libraby.service.dto.AccountDTO;
import com.kma.libraby.service.dto.LoginRequest;
import com.kma.libraby.web.errors.ErrorConstants;
import com.kma.libraby.web.errors.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class UserJWTController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private AccountService accountService;


    @PostMapping("/auth")
    public ResponseEntity<AccountDTO> authorize(@RequestBody LoginRequest auth){
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(auth.getAccountName(),auth.getPassword())
            );
            final String jwt = tokenProvider.createToken(authentication);
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER,"Bearer "+jwt);
            Optional<AccountDTO> userFind = accountService.getAccountByAccountName(authentication.getName());
            if (userFind.isPresent()){
                return new ResponseEntity<>(userFind.get(),httpHeaders,HttpStatus.OK);
            }else {
                throw new BadCredentialsException(ErrorConstants.BAD_CREDENTIALS);
            }
        }catch (Exception e){
            throw new BadCredentialsException(ErrorConstants.BAD_CREDENTIALS);
        }
    }

    

}