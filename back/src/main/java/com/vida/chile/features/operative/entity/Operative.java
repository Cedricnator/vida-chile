package com.vida.chile.features.operative.entity;

import com.vida.chile.features.campaign.entity.Campain;
import com.vida.chile.features.state.entity.State;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

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
    private Campain campain;

    @ManyToOne
    @JoinColumn(name = "state_id")
    private State state;
}
