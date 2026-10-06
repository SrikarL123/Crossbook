package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.BookComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface BookCommentRepository extends JpaRepository<BookComment, Long> {

    List<BookComment> findByBookIdOrderByCreatedAtAsc(Integer bookId);

    List<BookComment> findByParentCommentIdOrderByCreatedAtAsc(Long parentCommentId);

    @Modifying
    @Transactional
    @Query("DELETE FROM BookComment c WHERE c.parentCommentId = :parentCommentId")
    void deleteRepliesByParentCommentId(
            @Param("parentCommentId") Long parentCommentId
    );
}