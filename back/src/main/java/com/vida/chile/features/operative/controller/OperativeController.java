package com.vida.chile.features.operative.controller;

import com.vida.chile.features.operative.entity.Operative;
import com.vida.chile.features.operative.service.OperativeService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/operative")
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
