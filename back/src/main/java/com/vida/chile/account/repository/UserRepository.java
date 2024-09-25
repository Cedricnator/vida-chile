package com.vida.chile.account.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vida.chile.user.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
   
}
