package com.example.myfavmovie.Repositories;

import com.example.myfavmovie.Models.UserProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProfileRepository extends CrudRepository<UserProfile,Long> {

}
