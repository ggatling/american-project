package com.example.myfavmovie.Controllers;

import com.example.myfavmovie.Models.UserProfile;
import com.example.myfavmovie.Services.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserProfileController {
    @Autowired
    UserProfileService userProfileService;

    @Autowired
    public void setUserProfileService(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }
//    @GetMapping("/profile")
//    public UserProfile getUserProfile() {
//        return userProfileService.getUserProfile();
//    }

//    @PutMapping("/profile")
//    public UserProfile updateUserProfile(@RequestBody UserProfile userProfile) {
//        return userProfileService.updateUserProfile(userProfile);
//    }
}
