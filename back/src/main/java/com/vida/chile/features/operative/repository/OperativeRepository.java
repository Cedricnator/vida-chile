package com.vida.chile.features.operative.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.operative.entity.Operative;

@Repository
public interface OperativeRepository extends JpaRepository<Operative, Long> {
}
