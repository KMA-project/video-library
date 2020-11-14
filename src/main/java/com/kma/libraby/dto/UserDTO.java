package com.kma.libraby.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO implements Serializable {
    private int Id;
    private String userId;
    private String password;
    private String fullName;
    private String sex;
    private String createdDate;
    private boolean active;
    private RoleDTO role;
}
