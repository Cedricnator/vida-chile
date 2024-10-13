package com.vida.chile.features.city.repository;

import com.vida.chile.features.city.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
