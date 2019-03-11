package com.imrancluster.physiology.repositories;

import com.imrancluster.physiology.model.Hospital;
import org.springframework.data.repository.CrudRepository;

public interface HospitalRepository extends CrudRepository<Hospital, Long> {

    Hospital findByName(String name);
    Hospital findByIdentifier(String identifier);
}
