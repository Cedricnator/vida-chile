package com.vida.chile.features.bloodBank.controller;

import com.vida.chile.features.bloodBank.entity.BloodBank;
import com.vida.chile.features.bloodBank.service.BloodBankService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/bloodBank")
@AllArgsConstructor
public class BloodBankController {
    private final BloodBankService bloodBankService;

    @GetMapping("/")
    public List<BloodBank> getBloodBanks(){
        return bloodBankService.getAllBloodBanks();
    }

    @GetMapping("/{id}")
    public BloodBank getBloodBank(@PathVariable Long id){
        return bloodBankService.getBloodBank(id);
    }

    @PostMapping("/")
    public void createBloodBank(@RequestBody BloodBank bloodBank){
        bloodBankService.createBloodBank(bloodBank);
    }

    @PutMapping("/")
    public void updateBloodBank(@RequestBody BloodBank bloodBank){
        bloodBankService.updateBloodBank(bloodBank);
    }
}
