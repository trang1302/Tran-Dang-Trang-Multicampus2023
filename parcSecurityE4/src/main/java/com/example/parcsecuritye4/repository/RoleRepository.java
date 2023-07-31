package com.example.parcsecuritye4.repository;

import com.example.parcsecuritye4.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Map;
import java.util.Optional;
public interface RoleRepository extends JpaRepository<Roles,Long> {
    Optional<Roles> findByName(String name);
}
