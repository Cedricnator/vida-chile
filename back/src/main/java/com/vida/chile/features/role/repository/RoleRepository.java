package com.vida.chile.features.role.repository;

import com.vida.chile.features.role.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
