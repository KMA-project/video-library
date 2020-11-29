package com.kma.libraby.repository;

import com.kma.libraby.domain.UserEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

    @EntityGraph("User.role")
    List<UserEntity> findAll();

    @EntityGraph(attributePaths = "roles")
    Optional<UserEntity> findOneWithAuthoritiesByUserId(String userName);

}
