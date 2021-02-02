package com.kma.libraby.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO implements Serializable {
    private String accountId;
    private String accountName;
    private String fullName;
    private boolean active;
    private List<String> authorities;
}
