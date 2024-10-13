package com.vida.chile.features.district.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.district.entity.District;

@Repository
public interface DistrictRepository extends JpaRepository<District, Long> {
}
