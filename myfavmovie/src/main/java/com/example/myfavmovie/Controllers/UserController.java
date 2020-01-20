package com.example.myfavmovie.Controllers;

import com.example.myfavmovie.Config.JwtResponse;
import com.example.myfavmovie.Models.SavedMovies;
import com.example.myfavmovie.Models.User;
import com.example.myfavmovie.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/hello")
    public String helloWorld(){ return "Hello World!"; }

    @GetMapping("/user/list")
    public Iterable<User> listUsers(){ return userService.listUsers(); }

    @GetMapping("/user/{username}/savedmovies")
    public Iterable<SavedMovies> listUserSavedMovies(@PathVariable String username){ return userService.listUserSavedMovies(username); }

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User newUser){
        return ResponseEntity.ok(new JwtResponse(userService.createUser(newUser)));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        return ResponseEntity.ok(new JwtResponse(userService.login(user)));
    }
}
