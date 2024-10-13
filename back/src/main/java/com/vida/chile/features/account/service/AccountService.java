package com.vida.chile.features.account.service;

import com.vida.chile.features.account.Account;
import com.vida.chile.features.account.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

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
