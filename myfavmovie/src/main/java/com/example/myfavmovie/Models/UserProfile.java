package com.example.myfavmovie.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;

@Entity
@Table(name = "user_profile")
public class UserProfile {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;

    @Column
    private String favorite_movie;

    @Column
    private String favorite_actor;

    @Column
    private String favorite_genre;


    @JsonIgnore
    @OneToOne(mappedBy = "userProfile",
            cascade = {CascadeType.DETACH, CascadeType.MERGE,
                    CascadeType.PERSIST, CascadeType.REFRESH})

    private User user;

    public User getUser(){
        return user;
    }
    public void setUser(User user){
        this.user = user;
    }
    public UserProfile(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFavorite_movie() {
        return favorite_movie;
    }

    public void setFavorite_movie(String favorite_movie) {
        this.favorite_movie = favorite_movie;
    }

    public String getFavorite_actor() {
        return favorite_actor;
    }

    public void setFavorite_actor(String favorite_actor) {
        this.favorite_actor = favorite_actor;
    }

    public String getFavorite_genre() {
        return favorite_genre;
    }

    public void setFavorite_genre(String favorite_genre) {
        this.favorite_genre = favorite_genre;
    }
}
