package com.kma.libraby.service;

import com.kma.libraby.domain.UserEntity;
import com.kma.libraby.repository.UserRepository;
import com.kma.libraby.security.UserNotActivatedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class DomainUserDetailsService implements UserDetailsService {

    @Autowired
    private final UserRepository userRepository;

    public DomainUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String userId)  {
        return userRepository.findOneWithAuthoritiesByUserId(userId)
                .map(userEntity -> createSpringSecurityUser(userId,userEntity))
                .orElseThrow(() -> new UsernameNotFoundException("User " + userId + " was not found in the database"));
    }

    private User createSpringSecurityUser(String userId, UserEntity user){
        if (!user.isActive()) {
            throw new UserNotActivatedException("User " + userId + " was not activated");
        }
        List<GrantedAuthority> grantedAuthorities = user.getRoles().stream()
                .map(authority -> new SimpleGrantedAuthority(authority.getRoleName()))
                .collect(Collectors.toList());
        return new User(user.getUserId(), user.getPassword(), grantedAuthorities);
    }
}