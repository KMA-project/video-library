package com.kma.libraby.repository;

import com.kma.libraby.domain.Account;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface AccountRepository extends JpaRepository<Account, Integer> {

    @EntityGraph("User.role")
    List<Account> findAll();

    @EntityGraph(attributePaths = "roles")
    Optional<Account> findOneWithAuthoritiesByUserId(String userId);

}
