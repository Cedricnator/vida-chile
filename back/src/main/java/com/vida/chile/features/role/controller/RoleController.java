package com.vida.chile.features.role.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vida.chile.features.role.entity.Role;
import com.vida.chile.features.role.services.RoleService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/v1/role")
@AllArgsConstructor
@Slf4j
public class RoleController {
    private final RoleService roleService;

    @GetMapping("/{id}")
    public Role getRole(@PathVariable Long id){
        return this.roleService.getRole(id);
    }

    @GetMapping("/")
    public List<Role> getRoles(){
        return this.roleService.getAllRoles();
    }

    @PostMapping("/")
    public void createRole(@RequestBody Role role){
        this.roleService.createRole(role);
    }

    @PutMapping("/")
    public void updateRole(@RequestBody Role role){
        this.roleService.updateRole(role);
    }

    @DeleteMapping("/{id}")
    public void deleteRole(@PathVariable Long id){
        this.roleService.deleteRole(id);
    }
}
