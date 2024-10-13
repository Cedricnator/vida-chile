package com.vida.chile.features.faq.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vida.chile.features.faq.entity.Faq;
import com.vida.chile.features.faq.service.FaqService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/v1/faq")
@AllArgsConstructor
public class FaqController {
    private final FaqService faqService;
    
    @GetMapping("/health")
    public String healthCheck(){
        return "Faq Service is up and running";
    }

    @GetMapping("/")
    public List<Faq> getFaqs(){
        return this.faqService.getAllFaqs();
    }

    @GetMapping("/{id}")
    public Faq getFaq(@PathVariable Long id){
        return this.faqService.getFaq(id);
    }

    @PostMapping("/")
    public void createFaq(@RequestBody Faq faq){
        this.faqService.createFaq(faq);
    }

    @PutMapping("/{id}")
    public void updateFaq(@PathVariable Long id, @RequestBody Faq faq){
        Faq newFaq = this.faqService.getFaq(id);
        newFaq = faq;
        this.faqService.updateFaq(newFaq);
    }
}
