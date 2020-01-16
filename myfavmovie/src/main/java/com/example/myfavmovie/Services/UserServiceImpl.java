package com.example.myfavmovie.Services;


import com.example.myfavmovie.Models.SavedMovies;
import com.example.myfavmovie.Models.User;
import com.example.myfavmovie.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.myfavmovie.Services.UserProfileService;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserProfileService userProfileService;

    @Override
    public Iterable<User> listUsers() {
        return null;
    }

    @Override
    public Iterable<SavedMovies> listUserSavedMovies(String username){
        User user = getUser(username);
        return user.getSavedmovies();
    }

    @Override
    public User getUser(String username) {
        return null;
    }

    @Override
    public String createUser(User newUser) {
        return null;
    }

    @Override
    public String login(User user) {
        return null;
    }

//    @Override
//    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
//        return null;
//    }
}
