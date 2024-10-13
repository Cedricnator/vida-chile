package com.vida.chile.features.bloodBank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.bloodBank.entity.BloodBank;

@Repository
public interface BlookBankRepository extends JpaRepository<BloodBank, Long> {
}
