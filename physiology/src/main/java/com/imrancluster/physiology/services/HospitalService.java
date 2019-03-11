package com.imrancluster.physiology.services;

import com.imrancluster.physiology.model.Hospital;
import com.imrancluster.physiology.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    public Hospital saveOrUpdateHospital(Hospital hospital) {

        if (hospital.getId() != null) {
            Hospital hospital1 = hospitalRepository.findByName(hospital.getName());

            // @TODO: lather exception, security validation
        } else {
            hospital.setIdentifier(this.getUniqueId().toString());
        }



        return hospitalRepository.save(hospital);
    }

    public Optional<Hospital> getHospitalById(Long hospitalId) {

        Optional<Hospital> hospital = hospitalRepository.findById(hospitalId);

        return hospital;
    }

    public Iterable<Hospital> getAllHospital() {

        return hospitalRepository.findAll();
    }

    public UUID getUniqueId() {
        UUID uniqueKey = UUID.randomUUID();
        return uniqueKey;
    }

    public Hospital findHospitalByIdentifier(String identifier) {

        return hospitalRepository.findByIdentifier(identifier);
    }
}
