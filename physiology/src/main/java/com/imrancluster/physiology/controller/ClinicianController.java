package com.imrancluster.physiology.controller;

import com.imrancluster.physiology.model.Clinician;
import com.imrancluster.physiology.services.ClinicianService;
import com.imrancluster.physiology.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/clinician")
@CrossOrigin
public class ClinicianController {

    @Autowired
    private ClinicianService clinicianService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewClinician(@Valid @RequestBody Clinician clinician, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null) return errorMap;

        Clinician clinician1 = clinicianService.saveOrUpdateClinician(clinician);

        return new ResponseEntity<Clinician>(clinician1, HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<?> updateClinician(@Valid @RequestBody Clinician clinician, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null) return errorMap;

        Clinician clinician1 = clinicianService.saveOrUpdateClinician(clinician);

        return new ResponseEntity<Clinician>(clinician1, HttpStatus.OK);
    }

    @GetMapping("/{hospitalIdentifier}")
    public Iterable<Clinician> getCliniciansByHospitalIdentifier(@PathVariable String hospitalIdentifier) {

        return clinicianService.getCliniciansByHospitalIdentifier(hospitalIdentifier);
    }



}
