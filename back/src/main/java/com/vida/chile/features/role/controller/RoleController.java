package com.vida.chile.role.controller;

import com.vida.chile.role.entity.Role;
import com.vida.chile.role.services.RoleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {
    private final RoleService roleService;

    RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

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
