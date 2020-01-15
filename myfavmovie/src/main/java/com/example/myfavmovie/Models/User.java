package com.example.myfavmovie.Models;


import javax.persistence.*;

@Entity
@Table(name ="users")
public class User {
    @Id
    @Column
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

}
