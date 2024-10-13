package com.vida.chile.features.account.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.account.entity.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
}
