package com.example.myfavmovie.Services;

import com.example.myfavmovie.Models.UserProfile;
import com.example.myfavmovie.Repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService{
    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;
//
//    public UserProfile updateUserProfile(UserProfile newProfile){
//
//    }
//
//
//    public UserProfile getUserProfile(){
//
//    }
}
