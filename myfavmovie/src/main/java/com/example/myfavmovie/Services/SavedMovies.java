package com.example.myfavmovie.Services;


import org.springframework.http.ResponseEntity;

public interface SavedMovies {
    //List all Movies
    public Iterable<SavedMovies> listAllSavedMovies();

    //List movies by user
    public Iterable<SavedMovies> listUsersSavedMovies();

    //Create movies
    public SavedMovies createSavedMovies(SavedMovies newmovies);

    //Deletes movies
    public ResponseEntity deleteSavedMovies(SavedMovies moviesId);
}
