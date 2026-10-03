package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.CommentReaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommentReactionRepository extends JpaRepository<CommentReaction, Long> {

    Optional<CommentReaction> findByCommentIdAndUserId(
            Long commentId,
            Long userId
    );

    long countByCommentIdAndReactionType(
            Long commentId,
            String reactionType
    );

    List<CommentReaction> findByCommentId(Long commentId);
}