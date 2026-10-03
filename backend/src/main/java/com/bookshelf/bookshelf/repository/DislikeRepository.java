package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.Dislike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DislikeRepository extends JpaRepository<Dislike, Long> {

    List<Dislike> findByUserId(Long userId);

    Dislike findByUserIdAndBookId(Long userId, Integer bookId);

    void deleteByUserIdAndBookId(
        Long userId,
        Integer bookId
);
}