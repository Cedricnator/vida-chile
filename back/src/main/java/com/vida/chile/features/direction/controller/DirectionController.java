package com.vida.chile.features.direction.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vida.chile.features.direction.entity.Direction;
import com.vida.chile.features.direction.service.DirectionService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/v1/direction")
@AllArgsConstructor
@Slf4j
public class DirectionController {
   private final DirectionService directionService;

   @GetMapping()
   public ResponseEntity<?> findAll() {
      try {
         List<Direction> directions = directionService.getAllDirections();
         return new ResponseEntity<>(directions, HttpStatus.OK);
      } catch (Exception e) {
         log.error("Error fetching all directions: {}", e.getMessage());
         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> find(@PathVariable Long id) {
      try {
         Direction direction = directionService.getDirection(id);   
         return new ResponseEntity<>(direction, HttpStatus.OK);
      } catch (Exception e) {
         log.error("Error fetching one direction: {}", e.getMessage());
         return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }

    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Direction direction) {
        try {
            directionService.createDirection(direction);
            return new ResponseEntity<>("Creation Successfull", HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error creating direction: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Direction direction) {
        try {
            directionService.updateDirection(direction);
            return new ResponseEntity<>("Update Successfull", HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error updating direction: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            directionService.deleteDirection(id);
            return new ResponseEntity<>("Direction deleted succesfully", HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error deleting direction: {}", e.getMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
