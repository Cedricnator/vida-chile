package com.vida.chile.features.bloodBank.dto;

import java.util.List;

import com.vida.chile.features.operative.entity.Operative;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BloodBankDto {
   private String name;
   private List<Operative> operatives;
}
