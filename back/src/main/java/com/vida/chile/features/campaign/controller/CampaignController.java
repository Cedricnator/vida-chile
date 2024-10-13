package com.vida.chile.features.campain.controller;

import com.vida.chile.features.campain.entity.Campain;
import com.vida.chile.features.campain.service.CampainService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/campain")
public class CampainController {
    private final CampainService campainService;

    public CampainController(CampainService campainService){
        this.campainService = campainService;
    }

    @GetMapping("/")
    public List<Campain> getCampains(){
        return this.campainService.getAllCampains();
    }

    @GetMapping("/{id}")
    public Campain getCampain(@PathVariable Long id){
        return this.campainService.getCampain(id);
    }

    @PostMapping("/")
    public void createCampain(@RequestBody Campain campain){
        this.campainService.createCampain(campain);
    }

    @PutMapping("/")
    public void updateCampain(@RequestBody Campain campain){
        this.campainService.updateCampain(campain);
    }

    @DeleteMapping("/{id}")
    public void deleteCampain(@PathVariable Long id){
        this.campainService.deleteCampain(id);
    }
}
