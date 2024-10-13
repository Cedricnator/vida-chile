package com.vida.chile.features.direction.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.direction.entity.Direction;

@Repository
public interface DirectionRepository extends JpaRepository<Direction, Long> {

}
