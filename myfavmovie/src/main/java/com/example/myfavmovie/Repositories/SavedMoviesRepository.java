package com.example.myfavmovie.Repositories;

import com.example.myfavmovie.Models.SavedMovies;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedMoviesRepository extends CrudRepository<SavedMovies, Long> {
    @Query("FROM SavedMovies s WHERE s.user_id = ?1")
    public Iterable<SavedMovies> findByUserId(Long userId);

}
