package com.vida.chile.features.district.service;

import com.vida.chile.features.district.entity.District;
import com.vida.chile.features.district.repository.DistrictRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DistrictService {
    private final DistrictRepository districtRepository;

    public void createDistrict(District district){
        districtRepository.save(district);
    }

    public List<District> getAllDistricts(){
        return districtRepository.findAll();
    }

    public District getDistrict(Long id){
        return districtRepository.findById(id).orElse(null);
    }

    public void updateDistrict(District district){
        districtRepository.save(district);
    }

    public void deleteDistrict(Long id){
        districtRepository.deleteById(id);
    }

}
