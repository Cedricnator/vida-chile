package com.vida.chile.features.user.services;

import com.vida.chile.features.user.entity.User;

import java.util.List;

public interface UserService {
   public void createUser(User user);
   public List<User> getAllUsers();
   public User getUser(Long id);
   public void updateUser(User user);
   public void deleteUser(Long id);
}
