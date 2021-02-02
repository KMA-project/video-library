package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "account")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Account implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private String accountId;

    @Column(name = "account_name",length = 8)
    private String accountName;

    @Column(name = "password",length = 60)
    private String password;

    @Column(name = "full_name",length = 45)
    private String fullName;

    private String sex;

    private boolean active;

    @Column(name = "created_date",updatable = false)
    private Date createdDate;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name="account_role",
            joinColumns = @JoinColumn(name ="account_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

}
