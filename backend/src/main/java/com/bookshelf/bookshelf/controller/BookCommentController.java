package com.bookshelf.bookshelf.controller;

import org.springframework.transaction.annotation.Transactional;
import com.bookshelf.bookshelf.dto.CommentRequest;
import com.bookshelf.bookshelf.dto.CommentResponse;
import com.bookshelf.bookshelf.entity.BookComment;
import com.bookshelf.bookshelf.entity.CommentReaction;
import com.bookshelf.bookshelf.entity.User;
import com.bookshelf.bookshelf.repository.BookCommentRepository;
import com.bookshelf.bookshelf.repository.CommentReactionRepository;
import com.bookshelf.bookshelf.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class BookCommentController {

    private final BookCommentRepository commentRepository;
    private final UserRepository userRepository;
    private final CommentReactionRepository reactionRepository;

    public BookCommentController(
            BookCommentRepository commentRepository,
            UserRepository userRepository,
            CommentReactionRepository reactionRepository) {

        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.reactionRepository = reactionRepository;
    }

    // =========================================================
    // GET COMMENTS FOR A BOOK
    // =========================================================

    @GetMapping("/{bookId}")
    public List<CommentResponse> getComments(
            @PathVariable Integer bookId,
            @RequestHeader(value = "Authorization", required = false)
            String authorization) {

        Optional<User> currentUser = getUser(authorization);

        return commentRepository
                .findByBookIdOrderByCreatedAtAsc(bookId)
                .stream()
                .map(comment -> toResponse(comment, currentUser))
                .toList();
    }

    // =========================================================
    // ADD COMMENT
    // =========================================================

    @PostMapping("/{bookId}")
    public ResponseEntity<?> addComment(
            @PathVariable Integer bookId,
            @RequestHeader(value = "Authorization", required = false)
            String authorization,
            @RequestBody CommentRequest request) {

        Optional<User> author = getUser(authorization);

        if (author.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Please log in to comment");
        }

        String content = normalizedContent(request);

        if (content == null) {
            return ResponseEntity
                    .badRequest()
                    .body("Comment must contain 1 to 2000 characters");
        }

        LocalDateTime now = LocalDateTime.now();

        BookComment comment = new BookComment();

        comment.setBookId(bookId);
        comment.setUserId(author.get().getUserId());
        comment.setContent(content);
        comment.setCreatedAt(now);
        comment.setUpdatedAt(now);

        BookComment savedComment = commentRepository.save(comment);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(toResponse(savedComment, author));
    }

    // =========================================================
    // EDIT COMMENT
    // =========================================================

    @PutMapping("/{commentId}")
    public ResponseEntity<?> editComment(
            @PathVariable Long commentId,
            @RequestHeader(value = "Authorization", required = false)
            String authorization,
            @RequestBody CommentRequest request) {

        Optional<User> author = getUser(authorization);

        if (author.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Please log in to edit comments");
        }

        Optional<BookComment> existing =
                commentRepository.findById(commentId);

        if (existing.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        BookComment comment = existing.get();

        if (!comment.getUserId().equals(author.get().getUserId())) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("You can only edit your own comments");
        }

        String content = normalizedContent(request);

        if (content == null) {
            return ResponseEntity
                    .badRequest()
                    .body("Comment must contain 1 to 2000 characters");
        }

        comment.setContent(content);
        comment.setUpdatedAt(LocalDateTime.now());

        BookComment updatedComment =
                commentRepository.save(comment);

        return ResponseEntity.ok(
                toResponse(updatedComment, author)
        );
    }

    // =========================================================
// DELETE COMMENT / REPLY
// =========================================================

        @DeleteMapping("/{commentId}")
        @Transactional
        public ResponseEntity<?> deleteComment(
                @PathVariable Long commentId,
                @RequestHeader(value = "Authorization", required = false)
                String authorization) {

        Optional<User> author = getUser(authorization);

        if (author.isEmpty()) {
                return ResponseEntity
                        .status(HttpStatus.UNAUTHORIZED)
                        .body("Please log in to delete comments");
        }

        Optional<BookComment> existing =
                commentRepository.findById(commentId);

        if (existing.isEmpty()) {
                return ResponseEntity.notFound().build();
        }

        BookComment comment = existing.get();

        // Only the owner can delete the comment/reply
        if (!comment.getUserId().equals(author.get().getUserId())) {
                return ResponseEntity
                        .status(HttpStatus.FORBIDDEN)
                        .body("You can only delete your own comments");
        }

        // =========================================================
        // DELETE REPLIES FIRST
        // =========================================================

        List<BookComment> replies =
                commentRepository.findByParentCommentIdOrderByCreatedAtAsc(commentId);

        for (BookComment reply : replies) {

                // Delete reactions belonging to this reply
                reactionRepository
                        .findByCommentId(reply.getId())
                        .forEach(reactionRepository::delete);

                // Delete the reply
                commentRepository.delete(reply);
        }

        // =========================================================
        // DELETE REACTIONS OF MAIN COMMENT
        // =========================================================

        reactionRepository
                .findByCommentId(commentId)
                .forEach(reactionRepository::delete);

        // =========================================================
        // DELETE MAIN COMMENT
        // =========================================================

        commentRepository.delete(comment);

        return ResponseEntity.noContent().build();
        }



    // =========================================================
// REPLY TO COMMENT
// =========================================================

@PostMapping("/{commentId}/reply")
public ResponseEntity<?> replyToComment(
        @PathVariable Long commentId,
        @RequestHeader(value = "Authorization", required = false)
        String authorization,
        @RequestBody CommentRequest request) {

    Optional<User> author = getUser(authorization);

    if (author.isEmpty()) {
        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body("Please log in to reply");
    }

    Optional<BookComment> parent =
            commentRepository.findById(commentId);

    if (parent.isEmpty()) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("Comment not found");
    }

    String content = normalizedContent(request);

    if (content == null) {
        return ResponseEntity
                .badRequest()
                .body("Reply must contain 1 to 2000 characters");
    }

    LocalDateTime now = LocalDateTime.now();

    BookComment reply = new BookComment();

    reply.setBookId(parent.get().getBookId());
    reply.setUserId(author.get().getUserId());
    reply.setParentCommentId(commentId);
    reply.setContent(content);
    reply.setCreatedAt(now);
    reply.setUpdatedAt(now);

    BookComment savedReply =
            commentRepository.save(reply);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(toResponse(savedReply, author));
}

    // =========================================================
    // LIKE COMMENT
    // =========================================================

    @PostMapping("/{commentId}/like")
    public ResponseEntity<?> likeComment(
            @PathVariable Long commentId,
            @RequestHeader(value = "Authorization", required = false)
            String authorization) {

        Optional<User> user = getUser(authorization);

        if (user.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Please log in to like comments");
        }

        Optional<BookComment> comment =
                commentRepository.findById(commentId);

        if (comment.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Long userId = user.get().getUserId();

        Optional<CommentReaction> existing =
                reactionRepository.findByCommentIdAndUserId(
                        commentId,
                        userId
                );

        if (existing.isPresent()) {

            CommentReaction reaction = existing.get();

            // Clicking LIKE again removes the like
            if ("LIKE".equals(reaction.getReactionType())) {

                reactionRepository.delete(reaction);

                return ResponseEntity.ok("Like removed");
            }

            // DISLIKE -> LIKE
            reaction.setReactionType("LIKE");

            reactionRepository.save(reaction);

            return ResponseEntity.ok("Changed to like");
        }

        // No existing reaction
        CommentReaction reaction = new CommentReaction();

        reaction.setCommentId(commentId);
        reaction.setUserId(userId);
        reaction.setReactionType("LIKE");

        reactionRepository.save(reaction);

        return ResponseEntity.ok("Comment liked");
    }

    // =========================================================
    // DISLIKE COMMENT
    // =========================================================

    @PostMapping("/{commentId}/dislike")
    public ResponseEntity<?> dislikeComment(
            @PathVariable Long commentId,
            @RequestHeader(value = "Authorization", required = false)
            String authorization) {

        Optional<User> user = getUser(authorization);

        if (user.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Please log in to dislike comments");
        }

        Optional<BookComment> comment =
                commentRepository.findById(commentId);

        if (comment.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Long userId = user.get().getUserId();

        Optional<CommentReaction> existing =
                reactionRepository.findByCommentIdAndUserId(
                        commentId,
                        userId
                );

        if (existing.isPresent()) {

            CommentReaction reaction = existing.get();

            // Clicking DISLIKE again removes the dislike
            if ("DISLIKE".equals(reaction.getReactionType())) {

                reactionRepository.delete(reaction);

                return ResponseEntity.ok("Dislike removed");
            }

            // LIKE -> DISLIKE
            reaction.setReactionType("DISLIKE");

            reactionRepository.save(reaction);

            return ResponseEntity.ok("Changed to dislike");
        }

        // No existing reaction
        CommentReaction reaction = new CommentReaction();

        reaction.setCommentId(commentId);
        reaction.setUserId(userId);
        reaction.setReactionType("DISLIKE");

        reactionRepository.save(reaction);

        return ResponseEntity.ok("Comment disliked");
    }

    // =========================================================
    // GET USER FROM AUTH TOKEN
    // =========================================================

    private Optional<User> getUser(String authorization) {

        if (authorization == null ||
                !authorization.startsWith("Bearer ")) {

            return Optional.empty();
        }

        String token =
                authorization.substring(7).trim();

        if (token.isEmpty()) {
            return Optional.empty();
        }

        return Optional.ofNullable(
                userRepository.findByAuthTokenHash(
                        AuthController.hashToken(token)
                )
        );
    }

    // =========================================================
    // VALIDATE COMMENT CONTENT
    // =========================================================

    private String normalizedContent(CommentRequest request) {

        if (request == null ||
                request.getContent() == null) {

            return null;
        }

        String content =
                request.getContent().trim();

        return content.isEmpty() ||
                content.length() > 2000
                ? null
                : content;
    }

    // =========================================================
    // CONVERT ENTITY -> RESPONSE
    // =========================================================

    private CommentResponse toResponse(
            BookComment comment,
            Optional<User> currentUser) {

        String username =
                userRepository.findById(comment.getUserId())
                        .map(User::getUsername)
                        .orElse("Former user");

        long likes =
                reactionRepository.countByCommentIdAndReactionType(
                        comment.getId(),
                        "LIKE"
                );

        long dislikes =
                reactionRepository.countByCommentIdAndReactionType(
                        comment.getId(),
                        "DISLIKE"
                );

        String userReaction = null;

        if (currentUser.isPresent()) {

            Optional<CommentReaction> reaction =
                    reactionRepository.findByCommentIdAndUserId(
                            comment.getId(),
                            currentUser.get().getUserId()
                    );

            if (reaction.isPresent()) {
                userReaction =
                        reaction.get().getReactionType();
            }
        }

        return new CommentResponse(
        comment.getId(),
        comment.getUserId(),
        comment.getParentCommentId(),
        username,
        comment.getContent(),
        comment.getCreatedAt(),
        comment.getUpdatedAt(),
        likes,
        dislikes,
        userReaction
);
    }
}