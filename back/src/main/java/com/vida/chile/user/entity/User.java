package com.vida.chile.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class User {
   private Integer id;
   private String name;
   private String password;
}
