package com.vida.chile.features.campaign.service;

import com.vida.chile.features.campaign.entity.Campaign;
import com.vida.chile.features.campaign.repository.CampaignRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CampaignService {
    private final CampaignRepository campaignRepository;

    public void createCampaign(Campaign campaign){
        campaignRepository.save(campaign);
    }

    public List<Campaign> getAllCampaign(){
        return campaignRepository.findAll();
    }

    public Campaign getCampaign(Long id){
        return campaignRepository.findById(id).orElse(null);
    }

    public void updateCampaign(Campaign campaign){
        campaignRepository.save(campaign);
    }

    public void deleteCampaign(Long id){
        campaignRepository.deleteById(id);
    }
}
