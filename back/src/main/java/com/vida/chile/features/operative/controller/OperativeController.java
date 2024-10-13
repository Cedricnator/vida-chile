package com.vida.chile.features.operative.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vida.chile.features.operative.entity.Operative;
import com.vida.chile.features.operative.service.OperativeService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/v1/operative")
@AllArgsConstructor
@Slf4j
public class OperativeController {
    private final OperativeService operativeService;

    @GetMapping("/")
    public List<Operative> getOperatives(){
        return operativeService.getAllOperatives();
    }

    @GetMapping("/{id}")
    public Operative getOperative(Long id){
        return operativeService.getOperative(id);
    }

    @GetMapping("/")
    public void createOperative(@RequestBody Operative operative){
        operativeService.createOperative(operative);
    }

    @PutMapping("/")
    public void updateOperative(@RequestBody Operative operative){
        operativeService.updateOperative(operative);
    }

    @DeleteMapping("/{id}")
    public void deleteOperative(@PathVariable Long id){
        operativeService.deleteOperative(id);
    }

}
