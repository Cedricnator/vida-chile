package com.vida.chile.core.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String Home(){
        return "Healthy";
    }

    @GetMapping("/secured")
    public String secured(){
        return "Secured";
    }
}
