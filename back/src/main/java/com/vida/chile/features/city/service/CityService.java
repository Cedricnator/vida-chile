package com.vida.chile.features.city.service;

import com.vida.chile.features.city.entity.City;
import com.vida.chile.features.city.repository.CityRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CityService {
    private final CityRepository cityRepository;

    public void createCity(City city){
        cityRepository.save(city);
    }

    public List<City> getAllCities(){
        return cityRepository.findAll();
    }

    public City getCity(Long id){
        return cityRepository.findById(id).orElse(null);
    }

    public void updateCity(City city){
        cityRepository.save(city);
    }

    public void deleteCity(Long id){
        cityRepository.deleteById(id);
    }

}
