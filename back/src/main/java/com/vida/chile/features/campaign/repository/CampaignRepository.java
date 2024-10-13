package com.vida.chile.features.campaign.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.campaign.entity.Campaign;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
