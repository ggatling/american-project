package com.example.myfavmovie.Services;

import com.example.myfavmovie.Models.SavedMovies;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface SavedMoviesService {
    //List all Movies
    public Iterable<SavedMovies> listAllSavedMovies();

    //List movies by user
    public Iterable<SavedMovies> listUsersSavedMovies();

    //Create movies
    public SavedMovies createSavedMovies(SavedMovies newmovies);

    //Deletes movies
    public ResponseEntity deleteSavedMovies(Long moviesId);
}
