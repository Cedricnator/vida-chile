package com.vida.chile.account.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.vida.chile.account.repository.UserRepository;
import com.vida.chile.user.entity.User;

public class UserImplService implements UserService{

   @Autowired
   private UserRepository userRepository;

   @Override
   public void createUser(User userDto) {
      this.userRepository.save(userDto);
   }

   @Override
   public void getAllUsers() {
      this.userRepository.findAll();
   }

   @Override
   public void getUser(Integer id) {
      this.userRepository.findById(id);
   }

   @Override
   public void updateUser(User userDto) {
      throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
   }

   @Override
   public void deleteUser(Integer id) {
      if(this.userRepository.findById(id).isEmpty()){
         throw new IllegalArgumentException("User not found");
      }
      this.userRepository.deleteById(id);
   }
   
}
