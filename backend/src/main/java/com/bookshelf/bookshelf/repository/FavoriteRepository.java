package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository
        extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUserId(Long userId);

    Favorite findByUserIdAndBookId(
            Long userId,
            Integer bookId
    );

    long deleteByUserIdAndBookId(
            Long userId,
            Integer bookId
    );
}