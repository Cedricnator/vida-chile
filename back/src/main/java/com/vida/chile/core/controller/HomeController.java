package com.vida.chile.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String Home(){
        return "Hello, Chile";
    }

    @GetMapping("/secured")
    public String secured(){
        return "Secured";
    }
}
