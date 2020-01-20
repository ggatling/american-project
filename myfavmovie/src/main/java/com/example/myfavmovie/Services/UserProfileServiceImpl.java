package com.example.myfavmovie.Services;

import com.example.myfavmovie.Config.IAuthentication;
import com.example.myfavmovie.Models.User;
import com.example.myfavmovie.Models.UserProfile;
import com.example.myfavmovie.Repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService{
    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    UserService userService;

    @Autowired
    IAuthentication authImpl;

    @Override
    public UserProfile updateUserProfile(UserProfile newProfile) {
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        if(newProfile.getEmail()!=null){
            user.getUserProfile().setEmail(newProfile.getEmail().toString());
        }
        if(newProfile.getFavorite_actor()!=null){
            user.getUserProfile().setFavorite_actor(newProfile.getFavorite_actor().toString());
        }
        if(newProfile.getFavorite_genre()!=null){
            user.getUserProfile().setFavorite_genre(newProfile.getFavorite_genre().toString());
        }
        if(newProfile.getFavorite_movie()!=null){
            user.getUserProfile().setFavorite_movie(newProfile.getFavorite_movie().toString());
        }
        return userProfileRepository.save(user.getUserProfile());
    }


    @Override
    public UserProfile getUserProfile() {
        Authentication auth = authImpl.getAuthentication();
        User user = userService.getUser(auth.getName());
        return userProfileRepository.findById(user.getUserProfile().getId()).get();
    }
}
