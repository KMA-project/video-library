package com.kma.libraby.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@NamedEntityGraph(name = "User.role",
        attributeNodes = @NamedAttributeNode("roles"))
public class UserEntity implements Serializable {

    @Id
    private String Id;

    @Column(name = "UserId")
    private String userId;

    private String password;

    @Column(name = "FullName")
    private String fullName;

    private String sex;
    private boolean active;

    @Column(name = "CreatedDate",updatable = false)
    private String createdDate;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE,CascadeType.REFRESH})
    @JoinTable(name="user_role",
            joinColumns = @JoinColumn(name ="userId"),
            inverseJoinColumns = @JoinColumn(name = "roleId"))
    @JsonIgnore
    private List<Role> roles;

}
