package com.kma.libraby.repository;

import com.kma.libraby.models.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    @EntityGraph("User.role")
    List<User> findAll();

}
