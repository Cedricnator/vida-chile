package com.vida.chile.features.faq.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.faq.entity.Faq;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Long> {

}
