package com.vida.chile.features.city.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.city.entity.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
