package com.kma.libraby.repository;

import com.kma.libraby.domain.Account;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer> {

    @EntityGraph("User.role")
    List<Account> findAll();

    @EntityGraph(attributePaths = "roles")
    Optional<Account> findOneWithAuthoritiesByAccountName(String userName);

    @Query("SELECT account FROM Account account WHERE account.accountName =:accountName")
    Optional<Account> findAccountByAccountName(@Param("accountName") String accountName);

    @Query("SELECT account FROM Account account WHERE account.accountId =: accountId")
    Optional<Account> findByAccountId(@Param("accountId") String accountId);

}
