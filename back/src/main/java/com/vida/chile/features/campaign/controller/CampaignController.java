package com.vida.chile.features.campaign.controller;

import com.vida.chile.features.campaign.entity.Campaign;
import com.vida.chile.features.campaign.service.CampaignService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/campaign")
@AllArgsConstructor
@Slf4j
public class CampaignController {
    private final CampaignService campaignService;

    @GetMapping("/")
    public List<Campaign> getCampaigns(){
        return this.campaignService.getAllCampaign();
    }

    @GetMapping("/{id}")
    public Campaign getCampaign(@PathVariable Long id){
        return this.campaignService.getCampaign(id);
    }

    @PostMapping("/")
    public void createCampaign(@RequestBody Campaign campaign){
        this.campaignService.createCampaign(campaign);
    }

    @PutMapping("/")
    public void updateCampaign(@RequestBody Campaign campaign){
        this.campaignService.updateCampaign(campaign);
    }

    @DeleteMapping("/{id}")
    public void deleteCampaign(@PathVariable Long id){
        this.campaignService.deleteCampaign(id);
    }
}
