package com.vida.chile.features.form.controller;

import com.vida.chile.features.form.entity.Form;
import com.vida.chile.features.form.service.FormService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/form")
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

    @GetMapping("/")
    public void createForm(@RequestBody Form form){
        this.formService.createForm(form);
    }

    @GetMapping("/")
    public void updateForm(@RequestBody Form form){
        this.formService.updateForm(form);
    }

    @DeleteMapping("/{id}")
    public void deleteForm(@PathVariable Long id){
        this.formService.deleteForm(id);
    }
}
