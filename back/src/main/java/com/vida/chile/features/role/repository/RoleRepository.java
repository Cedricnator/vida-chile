package com.vida.chile.features.role.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vida.chile.features.role.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
