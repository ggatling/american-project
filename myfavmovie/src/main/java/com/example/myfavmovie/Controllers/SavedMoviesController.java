package com.example.myfavmovie.Controllers;

import com.example.myfavmovie.Models.SavedMovies;
import com.example.myfavmovie.Repositories.SavedMoviesRepository;
import com.example.myfavmovie.Repositories.UserRepository;
import com.example.myfavmovie.Services.SavedMoviesService;
import com.example.myfavmovie.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class SavedMoviesController {
    @Autowired
    SavedMoviesService savedMoviesService;

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SavedMoviesRepository savedMoviesRepository;

    //List all movies saved by users
    @GetMapping("/savedmovies/list/all")
    public Iterable<SavedMovies> listAllSavedMovies(){ return savedMoviesService.listAllSavedMovies(); }

    //Add movie to saved list
    @PostMapping("/savedmovies")
    public SavedMovies createSavedMovies(@RequestBody SavedMovies newmovies){
        return savedMoviesService.createSavedMovies(newmovies);
    }

    //List saved movies by user
    @GetMapping("/savedmovies/list")
    public Iterable<SavedMovies> listSavedMoviesByUser(){
        return savedMoviesService.listUsersSavedMovies();
    }

    //Delete movie by id
    @DeleteMapping("/movies/{savedMovieId}")
    public ResponseEntity deleteSavedMovies(@PathVariable Long moviesId) {
        return savedMoviesService.deleteSavedMovies(moviesId);
    }
}
