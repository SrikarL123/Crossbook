package com.bookshelf.bookshelf.controller;

import com.bookshelf.bookshelf.entity.Favorite;
import com.bookshelf.bookshelf.entity.Dislike;
import com.bookshelf.bookshelf.repository.FavoriteRepository;
import com.bookshelf.bookshelf.repository.DislikeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BookPreferenceController {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private DislikeRepository dislikeRepository;

    @PostMapping("/favorite")
    public String addFavorite(@RequestBody Favorite favorite) {

        Favorite existing =
                favoriteRepository.findByUserIdAndBookId(
                        favorite.getUserId(),
                        favorite.getBookId()
                );

        if (existing != null) {
            return "Already Favorited";
        }

        Dislike existingDislike =
        dislikeRepository.findByUserIdAndBookId(
                favorite.getUserId(),
                favorite.getBookId()
        );

        if (existingDislike != null) {
            dislikeRepository.delete(existingDislike);
        }

        favoriteRepository.save(favorite);

        return "Favorite Saved";
    }

    @PostMapping("/dislike")
    public String addDislike(@RequestBody Dislike dislike) {

        Dislike existing =
                dislikeRepository.findByUserIdAndBookId(
                        dislike.getUserId(),
                        dislike.getBookId()
                );

        if (existing != null) {
            return "Already Disliked";
        }

        Favorite existingFavorite =
        favoriteRepository.findByUserIdAndBookId(
                dislike.getUserId(),
                dislike.getBookId()
        );

        if (existingFavorite != null) {
            favoriteRepository.delete(existingFavorite);
        }

        dislikeRepository.save(dislike);

        return "Dislike Saved";
    }

    @GetMapping("/favorites/{userId}")
    public List<Favorite> getFavorites(
            @PathVariable Long userId) {

        return favoriteRepository.findByUserId(userId);
    }

    @GetMapping("/dislikes/{userId}")
    public List<Dislike> getDislikes(
            @PathVariable Long userId) {

        return dislikeRepository.findByUserId(userId);
    }


    @DeleteMapping("/favorite")
    public String removeFavorite(
            @RequestBody Favorite favorite) {

        Favorite existing =
                favoriteRepository.findByUserIdAndBookId(
                        favorite.getUserId(),
                        favorite.getBookId()
                );

        if (existing != null) {
            favoriteRepository.delete(existing);
        }

        return "Favorite Removed";
    }

    @DeleteMapping("/dislike")
public String removeDislike(
        @RequestBody Dislike dislike) {

    Dislike existing =
            dislikeRepository.findByUserIdAndBookId(
                    dislike.getUserId(),
                    dislike.getBookId()
            );

    if (existing != null) {
        dislikeRepository.delete(existing);
    }

    return "Dislike Removed";
}
}