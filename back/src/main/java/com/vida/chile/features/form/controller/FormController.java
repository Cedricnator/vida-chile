package com.vida.chile.features.form.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vida.chile.features.form.entity.Form;
import com.vida.chile.features.form.service.FormService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/v1/form")
@AllArgsConstructor
public class FormController {
    private final FormService formService;

    @GetMapping("/")
    public List<Form> getForms(){
        return this.formService.getAllForms();
    }

    @GetMapping("/{id}")
    public Form getForm(@PathVariable Long id){
        return this.formService.getForm(id);
    }

    @PostMapping("/")
    public void createFormm(@RequestBody Form form){
        this.formService.createForm(form);
    }

    @PutMapping("/")
    public void updateForm(@RequestBody Form form){
        this.formService.updateForm(form);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Long id){
        this.formService.deleteForm(id);
    }
}
