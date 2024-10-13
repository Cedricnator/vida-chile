package com.vida.chile.role.services;

import com.vida.chile.role.entity.Role;
import com.vida.chile.role.repository.RoleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public void createRole(Role role) {
        this.roleRepository.save(role);
    }

    public List<Role> getAllRoles() {
        return this.roleRepository.findAll();
    }

    public Role getRole(Long id) {
        return this.roleRepository.findById(id).orElse(null);
    }

    public void updateRole(Role role) {
        this.roleRepository.save(role);
    }

    public void deleteRole(Long id) {
        this.roleRepository.deleteById(id);
    }
}
