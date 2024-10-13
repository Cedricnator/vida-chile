package com.vida.chile.features.form.repository;

import com.vida.chile.features.form.entity.Form;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FormRepository extends JpaRepository<Form, Long> {
}
