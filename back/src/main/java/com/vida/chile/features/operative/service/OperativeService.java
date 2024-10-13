package com.vida.chile.features.operative.service;

import com.vida.chile.features.operative.entity.Operative;
import com.vida.chile.features.operative.repository.OperativeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OperativeService {
    private final OperativeRepository operativeRepository;

    public OperativeService(OperativeRepository operativeRepository){
        this.operativeRepository = operativeRepository;
    }

    public void createOperative(Operative operative){
        operativeRepository.save(operative);
    }

    public List<Operative> getAllOperatives(){
        return operativeRepository.findAll();
    }

    public Operative getOperative(Long id){
        return operativeRepository.findById(id).orElse(null);
    }

    public void updateOperative(Operative operative){
        operativeRepository.save(operative);
    }

    public void deleteOperative(Long id){
        operativeRepository.deleteById(id);
    }
}
