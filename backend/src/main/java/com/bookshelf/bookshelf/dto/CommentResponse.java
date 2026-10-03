package com.bookshelf.bookshelf.dto;

import java.time.LocalDateTime;

public class CommentResponse {

    private Long id;
    private Long userId;
    private String username;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private long likes;
    private long dislikes;
    private String userReaction;

    public CommentResponse(
            Long id,
            Long userId,
            String username,
            String content,
            LocalDateTime createdAt,
            LocalDateTime updatedAt,
            long likes,
            long dislikes,
            String userReaction) {

        this.id = id;
        this.userId = userId;
        this.username = username;
        this.content = content;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.likes = likes;
        this.dislikes = dislikes;
        this.userReaction = userReaction;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUsername() {
        return username;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public long getLikes() {
        return likes;
    }

    public long getDislikes() {
        return dislikes;
    }

    public String getUserReaction() {
        return userReaction;
    }
}