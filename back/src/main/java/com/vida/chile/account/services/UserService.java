package com.vida.chile.account.services;

import com.vida.chile.user.entity.User;

public interface UserService {
   public void createUser(User user);
   public void getAllUsers();
   public void getUser(Integer id);
   public void updateUser(User user);
   public void deleteUser(Integer id);
}
