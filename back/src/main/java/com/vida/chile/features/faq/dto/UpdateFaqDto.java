package com.vida.chile.features.faq.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateFaqDto {
    private String question;
    private String answer;
}
