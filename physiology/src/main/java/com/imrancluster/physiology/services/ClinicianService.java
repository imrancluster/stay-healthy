package com.imrancluster.physiology.services;

import com.imrancluster.physiology.model.Clinician;
import com.imrancluster.physiology.model.Hospital;
import com.imrancluster.physiology.repositories.ClinicianRepository;
import com.imrancluster.physiology.repositories.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ClinicianService {

    @Autowired
    private ClinicianRepository clinicianRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    public Clinician saveOrUpdateClinician(Clinician clinician) {

        if (clinician.getHospitalIdentifier() != null) {
            Hospital hospital = hospitalRepository.findByIdentifier(clinician.getHospitalIdentifier());

            if (hospital != null) {
                clinician.setHospital(hospital);
            }
        }

        return clinicianRepository.save(clinician);
    }

    public Iterable<Clinician> getCliniciansByHospitalIdentifier(String identifier) {

        return clinicianRepository.findAllByHospitalIdentifier(identifier);
    }
}
