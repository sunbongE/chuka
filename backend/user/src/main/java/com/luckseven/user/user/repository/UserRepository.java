package com.luckseven.user.user.repository;

import com.luckseven.user.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User findByUserId(String userID);

}
