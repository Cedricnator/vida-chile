package com.vida.chile.features.faq.controller;

import com.vida.chile.features.faq.entity.Faq;
import com.vida.chile.features.faq.service.FaqService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faq")
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
