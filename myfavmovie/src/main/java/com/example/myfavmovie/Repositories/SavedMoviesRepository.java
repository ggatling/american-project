package com.example.myfavmovie.Repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SavedMoviesRepository extends CrudRepository<SavedMoviesRepository, Long> {
    @Query("select * FROM SavedMovies s WHERE s.user_id = ?1")
    public Iterable<SavedMoviesRepository> findByUserId(Long userId);

}
