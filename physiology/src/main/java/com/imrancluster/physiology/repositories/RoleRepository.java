package com.imrancluster.physiology.repositories;


import com.imrancluster.physiology.model.Role;
import com.imrancluster.physiology.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
