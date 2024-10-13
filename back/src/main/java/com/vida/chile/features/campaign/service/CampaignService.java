package com.vida.chile.features.campain.service;

import com.vida.chile.features.campain.entity.Campain;
import com.vida.chile.features.campain.repository.CampainRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CampainService {
    private final CampainRepository campainRepository;

    public CampainService(CampainRepository campainRepository){
        this.campainRepository = campainRepository;
    }

    public void createCampain(Campain campain){
        campainRepository.save(campain);
    }

    public List<Campain> getAllCampains(){
        return campainRepository.findAll();
    }

    public Campain getCampain(Long id){
        return campainRepository.findById(id).orElse(null);
    }

    public void updateCampain(Campain campain){
        campainRepository.save(campain);
    }

    public void deleteCampain(Long id){
        campainRepository.deleteById(id);
    }
}
