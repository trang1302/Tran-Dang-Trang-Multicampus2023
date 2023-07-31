package com.example.parcsecuritye4.repository;
import com.example.parcsecuritye4.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface UserRepository extends JpaRepository<Users , Long> {
    Optional<Users> findByUsername(String username);
    Optional<Users> findByEmail(String email);

    Boolean existsByEmail(String email);

    Optional<Users> findByUsernameOrEmail(String username, String email);

    boolean existsByUsername(String username);
}
