package com.vida.chile.features.form.service;

import com.vida.chile.features.form.entity.Form;
import com.vida.chile.features.form.repository.FormRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FormService {
    private final FormRepository formRepository;

    public List<Form> getAllForms(){
        return formRepository.findAll();
    }

    public Form getForm(Long id){
        return formRepository.findById(id).orElse(null);
    }

    public void createForm(Form form){
        formRepository.save(form);
    }

    public void updateForm(Form form){
        formRepository.save(form);
    }

    public void deleteForm(Long id){
        formRepository.deleteById(id);
    }
}
