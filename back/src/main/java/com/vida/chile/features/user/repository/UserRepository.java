package com.vida.chile.features.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.user.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}


