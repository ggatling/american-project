package com.example.myfavmovie.Controllers;

import com.example.myfavmovie.Config.IAuthentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

    //to get the current user in the bean
    @Autowired
    private IAuthentication iauthentication;


    public String getCurrentUsername() {
        Authentication authentication = iauthentication.getAuthentication();
        return authentication.getName();
    }
}
