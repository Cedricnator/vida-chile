package com.vida.chile.features.user.services;

import com.vida.chile.features.user.entity.User;
import com.vida.chile.features.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public void createUser(User user) {
        this.userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUser(Long id) {
        return this.userRepository.findById(id).orElse(null);
    }

    @Override
    public void updateUser(User user) {
        this.userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        this.userRepository.deleteById(id);
    }
}


