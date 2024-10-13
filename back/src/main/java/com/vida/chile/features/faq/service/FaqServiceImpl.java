package com.vida.chile.features.faq.service;

import com.vida.chile.features.faq.entity.Faq;
import com.vida.chile.features.faq.repository.FaqRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FaqServiceImpl implements FaqService{
    private final FaqRepository faqRepository;

    @Override
    public void createFaq(Faq faq) {
        this.faqRepository.save(faq);
    }

    @Override
    public List<Faq> getAllFaqs() {
        return this.faqRepository.findAll();
    }

    @Override
    public Faq getFaq(Long id) {
        return this.faqRepository.findById(id).orElse(null);
    }

    @Override
    public void updateFaq(Faq faq) {
        this.faqRepository.save(faq);
    }

    @Override
    public void deleteFaq(Long id) {
        this.faqRepository.deleteById(id);
    }
}
