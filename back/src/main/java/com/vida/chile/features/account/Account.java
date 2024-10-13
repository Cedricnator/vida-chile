package com.vida.chile.features.account;

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
