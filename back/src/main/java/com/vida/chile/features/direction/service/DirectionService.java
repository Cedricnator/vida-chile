package com.vida.chile.features.direction.service;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vida.chile.features.direction.entity.Direction;
import com.vida.chile.features.direction.repository.DirectionRepository;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@AllArgsConstructor
@Slf4j
public class DirectionService {
   private final DirectionRepository directionRepository;

   public void createDirection(Direction direction){
      try {
         log.info("Creating direction: {}", direction);
         directionRepository.save(direction);
      } catch (Exception e) {
         log.error("Error creating direction: {}", e.getMessage());
      }
   }

   public List<Direction> getAllDirections(){
      try {
         log.info("Fetching all directions");
         return  this.directionRepository.findAll();         
      } catch (Exception e) {
         log.error("Error fetching all directions: {}", e.getMessage());
         return Collections.emptyList();
      }
   }

   public Direction getDirection(Long id){
      try {
         log.info("Fetching direction with id: {}", id);
         return this.directionRepository.findById(id).orElse(null);
      } catch (Exception e) {
         log.error("Error fetching direction with id: {}", e.getMessage());
         return null;
      }
   }

   public void updateDirection(Direction direction){
      try {
         log.info("Updating direction: {}", direction);
         if(!this.directionRepository.existsById(direction.getId())) throw new RuntimeException("Direction not found");
         this.directionRepository.save(direction);
      } catch (RuntimeException e) {
         log.error("Error updating direction: {}", e.getMessage());
      }
   }

   public void deleteDirection(Long id){
      try {
         log.info("Deleting direction with id: {}", id);
         this.directionRepository.deleteById(id);   
      } catch (Exception e) {
         log.error("Error deleting direction: {}", e.getMessage());
      }
   }



}
