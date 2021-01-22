package com.kma.libraby.web.controller;

import com.kma.libraby.service.dto.ErrorResponse;
import com.kma.libraby.web.errors.NotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionHadling extends ResponseEntityExceptionHandler {

    public ExceptionHadling() {
    }

    @ExceptionHandler(value = {BadCredentialsException.class})
    protected ResponseEntity<Object> handleException(RuntimeException ex, WebRequest request){
        String path = ((ServletWebRequest)request).getRequest().getRequestURI();
        ErrorResponse error = new ErrorResponse(HttpStatus.FORBIDDEN.value(),ex.getMessage(),path);
        return handleExceptionInternal(ex,error,new HttpHeaders(),HttpStatus.UNAUTHORIZED,request);
    }

    @ExceptionHandler(value = {NotFoundException.class})
    protected ResponseEntity<Object> handleNotFoundException(RuntimeException ex,WebRequest request){
        String path = ((ServletWebRequest)request).getRequest().getRequestURI();
        ErrorResponse error = new ErrorResponse(HttpStatus.NO_CONTENT.value(),ex.getMessage(),path);
        return handleExceptionInternal(ex,error,new HttpHeaders(),HttpStatus.BAD_REQUEST,request);
    }
}
