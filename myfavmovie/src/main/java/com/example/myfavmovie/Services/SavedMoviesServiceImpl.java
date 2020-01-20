package com.example.myfavmovie.Services;

import com.example.myfavmovie.Config.IAuthentication;
import com.example.myfavmovie.Controllers.SecurityController;
import com.example.myfavmovie.Models.SavedMovies;
import com.example.myfavmovie.Models.User;
import com.example.myfavmovie.Repositories.SavedMoviesRepository;
import com.example.myfavmovie.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class SavedMoviesServiceImpl implements SavedMoviesService {
    @Autowired
    SavedMoviesRepository savedMoviesRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    private IAuthentication authImpl;

    @Autowired
    SecurityController securityController;


    @Override
    public Iterable<SavedMovies>listAllSavedMovies(){
        return savedMoviesRepository.findAll();
    }

    @Override
    public Iterable<SavedMovies> listUsersSavedMovies() {
        Long userId = userRepository.findByUsername(securityController.getCurrentUsername()).getId();
        return savedMoviesRepository.findByUserId(userId);
    }

    @Override
    public SavedMovies createSavedMovies(SavedMovies newmovies){
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        newmovies.setUser(user);
        user.addSavedMovies(newmovies);
        return savedMoviesRepository.save(newmovies);
    }

    @Override
    @Transactional
    public ResponseEntity deleteSavedMovies(Long moviesId) {
        SavedMovies savedMovies = (SavedMovies) savedMoviesRepository.findById(moviesId).get();
        Authentication auth = authImpl.getAuthentication();
        Long currUserId = userService.getUser(auth.getName()).getId();
        Long savedMoviesdUserId = savedMovies.getUser().getId();
        User user = userRepository.findById(savedMovies.getUser().getId()).get();

        if(currUserId==savedMoviesdUserId){
            user.getSavedMovies().remove(savedMovies);
        }else {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(HttpStatus.OK);

    }
}
