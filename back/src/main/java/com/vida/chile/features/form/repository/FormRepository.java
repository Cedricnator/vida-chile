package com.vida.chile.features.form.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.form.entity.Form;

@Repository
public interface FormRepository extends JpaRepository<Form, Long> {
}
