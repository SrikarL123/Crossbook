package com.bookshelf.bookshelf.controller;

import com.bookshelf.bookshelf.repository.CommentReactionRepository;
import com.bookshelf.bookshelf.dto.CommentRequest;
import com.bookshelf.bookshelf.entity.BookComment;
import com.bookshelf.bookshelf.entity.User;
import com.bookshelf.bookshelf.repository.BookCommentRepository;
import com.bookshelf.bookshelf.repository.UserRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class BookCommentControllerTests {

    private BookCommentRepository commentRepository;
    private UserRepository userRepository;
    private CommentReactionRepository reactionRepository;

    private BookCommentController controller;
    private User commentOwner;
    private BookComment comment;

    @BeforeEach
    void setUp() {

        commentRepository = mock(BookCommentRepository.class);
        userRepository = mock(UserRepository.class);
        reactionRepository = mock(CommentReactionRepository.class);

        controller = new BookCommentController(
                commentRepository,
                userRepository,
                reactionRepository
        );

        commentOwner = new User();
        commentOwner.setUserId(1L);
        commentOwner.setUsername("reader-one");
        commentOwner.setAuthTokenHash(
                AuthController.hashToken("owner-token")
        );

        comment = new BookComment();
        comment.setUserId(1L);
        comment.setContent("Original comment");

        when(userRepository.findByAuthTokenHash(
                AuthController.hashToken("owner-token")
        )).thenReturn(commentOwner);
    }

    @Test
    void ownerCanEditComment() {

        when(commentRepository.findById(4L))
                .thenReturn(Optional.of(comment));

        when(commentRepository.save(comment))
                .thenReturn(comment);

        CommentRequest request = new CommentRequest();
        request.setContent("Updated comment");

        ResponseEntity<?> response =
                controller.editComment(
                        4L,
                        "Bearer owner-token",
                        request
                );

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Updated comment", comment.getContent());

        verify(commentRepository).save(comment);
    }

    @Test
    void anotherUserCannotEditOrDeleteComment() {

        User otherUser = new User();
        otherUser.setUserId(2L);
        otherUser.setUsername("reader-two");
        otherUser.setAuthTokenHash(
                AuthController.hashToken("other-token")
        );

        when(userRepository.findByAuthTokenHash(
                AuthController.hashToken("other-token")
        )).thenReturn(otherUser);

        when(commentRepository.findById(4L))
                .thenReturn(Optional.of(comment));

        CommentRequest request = new CommentRequest();
        request.setContent("Changed by someone else");

        ResponseEntity<?> editResponse =
                controller.editComment(
                        4L,
                        "Bearer other-token",
                        request
                );

        ResponseEntity<?> deleteResponse =
                controller.deleteComment(
                        4L,
                        "Bearer other-token"
                );

        assertEquals(
                HttpStatus.FORBIDDEN,
                editResponse.getStatusCode()
        );

        assertEquals(
                HttpStatus.FORBIDDEN,
                deleteResponse.getStatusCode()
        );

        assertEquals(
                "Original comment",
                comment.getContent()
        );

        verify(commentRepository, never())
                .save(comment);

        verify(commentRepository, never())
                .delete(comment);
    }
}