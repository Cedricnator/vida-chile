package com.vida.chile.features.district.controller;

import com.vida.chile.features.district.entity.District;
import com.vida.chile.features.district.service.DistrictService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/district")
@AllArgsConstructor
@Slf4j
public class DistrictController {
    private final DistrictService districtService;

    @GetMapping("/")
    public List<District> getDistricts(){
        return this.districtService.getAllDistricts();
    }

    @GetMapping("/{id}")
    public District getDistrict(@PathVariable Long id){
        return this.districtService.getDistrict(id);
    }

    @PostMapping("/")
    public void createDistrict(@RequestBody District district){
        this.districtService.createDistrict(district);
    }

    @PutMapping("/")
    public void updateDistrict(@RequestBody District district){
        this.districtService.updateDistrict(district);
    }

    @DeleteMapping("/{id}")
    public void deleteDistrict(@PathVariable Long id){
        this.districtService.deleteDistrict(id);
    }
}
