package com.vida.chile.user.controller;

import com.vida.chile.user.entity.User;
import com.vida.chile.user.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getUsers(){
        return this.userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id){
        return this.userService.getUser(id);
    }

    @PostMapping("/")
    public void createUser(@RequestBody User user){
        this.userService.createUser(user);
    }

    @PutMapping("/")
    public void updateUser(@RequestBody User user){
        this.userService.updateUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        this.userService.deleteUser(id);
    }

}
