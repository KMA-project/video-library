package com.kma.libraby.service;

import com.kma.libraby.domain.Account;
import com.kma.libraby.domain.Role;
import com.kma.libraby.repository.AccountRepository;
import com.kma.libraby.security.SecurityUtils;
import com.kma.libraby.service.dto.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AccountService{

    @Autowired
    private AccountRepository accountRepository;

    public Optional<AccountDTO> getAccountByAccountName(String accountName) {
        return Optional.of(accountRepository
                .findAccountByAccountName(accountName))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .map(account -> new AccountDTO(
                        account.getAccountId(),
                        account.getFullName(),
                        account.isActive(),
                        account.getRoles().stream().map(Role::getRoleName).collect(Collectors.toList())));
    }

    public Optional<Account> getUserWithAuthorities() {
        return SecurityUtils.getCurrentAccountLogin().flatMap(accountRepository::findOneWithAuthoritiesByAccountName);
    }
}
