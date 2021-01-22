package com.kma.libraby.web.errors;

public class BadRequestAlertException extends RuntimeException{

    public BadRequestAlertException(String message) {
        super("A new video cannot already have an ID:"+message);
    }

}
