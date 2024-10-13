package com.vida.chile.features.bloodBank.entity;

import com.vida.chile.features.operative.entity.Operative;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BloodBank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToMany
    @JoinTable(
        name = "blood_bank_operative",
        joinColumns = @JoinColumn(name = "blood_bank_id"),
        inverseJoinColumns = @JoinColumn(name = "operative_id")
    )
    private List<Operative> operatives;
}
