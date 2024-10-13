package com.vida.chile.features.faq.service;

import com.vida.chile.features.faq.entity.Faq;

import java.util.List;

public interface FaqService {
    void createFaq(Faq faq);
    List<Faq> getAllFaqs();
    Faq getFaq(Long id);
    void updateFaq(Faq faq);
    void deleteFaq(Long id);
}
