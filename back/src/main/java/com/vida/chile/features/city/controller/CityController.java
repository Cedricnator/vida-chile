package com.vida.chile.features.city.controller;

import com.vida.chile.features.city.entity.City;
import com.vida.chile.features.city.service.CityService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/city")
@AllArgsConstructor
public class CityController {
    private final CityService cityService;

    @GetMapping("/")
    public List<City> getCities(){
        return this.cityService.getAllCities();
    }

    @GetMapping("/{id}")
    public City getCity(Long id){
        return this.cityService.getCity(id);
    }

    @PutMapping("/")
    public void updateCity(@RequestBody City city){
        this.cityService.updateCity(city);
    }

    @DeleteMapping("/{id}")
    public void deleteCity(@PathVariable Long id){
        this.cityService.deleteCity(id);
    }
}
