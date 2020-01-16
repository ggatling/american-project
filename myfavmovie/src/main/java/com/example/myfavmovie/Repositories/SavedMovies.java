package com.example.myfavmovie.Repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedMovies extends CrudRepository<SavedMovies, Long> {
    @Query("select * FROM SavedMovies s WHERE s.user_id = ?1")
    public Iterable<SavedMovies> findByUserId(Long userId);

}
