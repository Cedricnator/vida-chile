package com.vida.chile.features.bloodBank.service;

import com.vida.chile.features.bloodBank.entity.BloodBank;
import com.vida.chile.features.bloodBank.repository.BlookBankRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BloodBankService {
    private final BlookBankRepository blookBankRepository;

    public void createBloodBank(BloodBank bloodBank){
        blookBankRepository.save(bloodBank);
    }

    public List<BloodBank> getAllBloodBanks(){
        return blookBankRepository.findAll();
    }

    public BloodBank getBloodBank(Long id){
        return blookBankRepository.findById(id).orElse(null);
    }

    public void updateBloodBank(BloodBank bloodBank){
        blookBankRepository.save(bloodBank);
    }

    public void deleteBloodBank(Long id){
        blookBankRepository.deleteById(id);
    }
}
