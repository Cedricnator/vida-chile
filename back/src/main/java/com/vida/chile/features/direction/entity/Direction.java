package com.vida.chile.features.direction.entity;

import java.io.Serializable;
import java.util.List;

import com.vida.chile.features.city.entity.City;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "direction")
public class Direction implements Serializable {
   @Id
   @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="direction_sequence")
   @SequenceGenerator(name="direction_sequence", sequenceName="direction_sequence", allocationSize=100)
   private Long id;
   
   @ManyToMany
   @JoinTable(
      name = "direction_city",
      joinColumns = @JoinColumn(name = "direction_id"),
      inverseJoinColumns = @JoinColumn(name = "city_id")
    )
   private List<City> city;
    
}