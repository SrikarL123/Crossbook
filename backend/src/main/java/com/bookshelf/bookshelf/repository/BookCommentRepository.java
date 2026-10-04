package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.BookComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookCommentRepository extends JpaRepository<BookComment, Long> {

    List<BookComment> findByBookIdOrderByCreatedAtAsc(Integer bookId);

    List<BookComment> findByParentCommentIdOrderByCreatedAtAsc(Long parentCommentId);
}