package com.vida.chile.user.entity;

import com.vida.chile.account.Account;
import com.vida.chile.role.entity.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String name;
   private String password;
   @ManyToOne
   @JoinColumn(name = "role_id")
   private Role role;
}
