package com.vida.chile.features.account.controller;

import com.vida.chile.features.account.Account;
import com.vida.chile.features.account.service.AccountService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/account")
@AllArgsConstructor
@Slf4j
public class AccountController {
    private final AccountService accountService;

    @GetMapping("/")
    public List<Account> getAccounts(){
        return this.accountService.getAllAccounts();
    }

    @PostMapping("/")
    public void createAccount(@RequestBody Account account){
        this.accountService.createAccount(account);
    }

    @GetMapping("/{id}")
    public Account getAccount(@PathVariable Long id){
        return this.accountService.getAccount(id);
    }

    @PutMapping("/")
    public void updateAccount(@RequestBody Account account){
        this.accountService.updateAccount(account);
    }

    @DeleteMapping("/{id}")
    public void deleteAccount(@PathVariable Long id){
        this.accountService.deleteAccount(id);
    }
}
