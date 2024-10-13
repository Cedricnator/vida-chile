package com.vida.chile.features.campaign.repository;

import com.vida.chile.features.campaign.entity.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
