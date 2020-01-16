package com.example.myfavmovie.Services;

import com.example.myfavmovie.Repositories.SavedMoviesRepository;
import com.example.myfavmovie.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class SavedMoviesImpl {
    @Autowired
    SavedMoviesRepository savedMoviesRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    public Iterable<SavedMoviesRepository> listAllSavedMovies(){
        return savedMoviesRepository.findAll();
    }
}
