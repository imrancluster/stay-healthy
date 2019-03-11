package com.imrancluster.physiology.repositories;

import com.imrancluster.physiology.model.Clinician;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClinicianRepository extends CrudRepository<Clinician, Long> {

    Iterable<Clinician> findAllByHospitalIdentifier(String identifier);
}
