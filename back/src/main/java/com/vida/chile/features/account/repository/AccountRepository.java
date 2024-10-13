package com.vida.chile.features.account.repository;

import com.vida.chile.features.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
