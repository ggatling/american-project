package com.example.myfavmovie.Services;

import com.example.myfavmovie.Repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class UserProfileServiceImpl {
    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;
}
