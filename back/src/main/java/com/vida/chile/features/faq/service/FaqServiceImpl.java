package com.vida.chile.faq.service;

import com.vida.chile.faq.entity.Faq;
import com.vida.chile.faq.repository.FaqRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqServiceImpl implements FaqService{
    private final FaqRepository faqRepository;

    public FaqServiceImpl(FaqRepository faqRepository) {
        this.faqRepository = faqRepository;
    }

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
