package com.example.myfavmovie.Services;

import com.example.myfavmovie.Models.SavedMovies;
import com.example.myfavmovie.Models.User;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public Iterable<User> listUsers();

    public Iterable<SavedMovies> listUserSavedMovies(String username);

    public User getUser (String username);

    public String createUser(User newUser);

    public String login(User user);
}
