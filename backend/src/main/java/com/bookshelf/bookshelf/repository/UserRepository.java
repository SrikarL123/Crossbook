package com.bookshelf.bookshelf.repository;

import com.bookshelf.bookshelf.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}