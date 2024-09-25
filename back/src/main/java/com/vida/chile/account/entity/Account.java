package com.vida.chile.account.entity;

import lombok.Data;
import lombok.Getter;

@Getter
@Data
public class Account {
   private int id;
   private String firstName;
   private String lastName;
   private String email;
}
