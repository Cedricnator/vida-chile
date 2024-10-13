package com.vida.chile.features.operative.entity;

import java.util.Date;

import com.vida.chile.features.campaign.entity.Campaign;
import com.vida.chile.features.state.entity.State;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Operative {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Date startDate;
    private Date endDate;

    @OneToOne
    @JoinColumn(name = "campain_id")
    private Campaign campain;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
}
