package com.vida.chile.features.account.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vida.chile.features.account.entity.Account;
import com.vida.chile.features.account.repository.AccountRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AccountService {
    private final AccountRepository accountRepository;

    public void createAccount(Account account){
        accountRepository.save(account);
    }

    public List<Account> getAllAccounts(){
        return accountRepository.findAll();
    }

    public Account getAccount(Long id){
        return accountRepository.findById(id).orElse(null);
    }

    public void updateAccount(Account account){
        accountRepository.save(account);
    }

    public void deleteAccount(Long id){
        accountRepository.deleteById(id);
    }
}
