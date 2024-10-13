package com.vida.chile.features.account.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreateAccountDto {
   private String firstName;
   private String lastName;
   private String email;
   private String gender;
   private Date date_of_birth;
   private String rut;
}
