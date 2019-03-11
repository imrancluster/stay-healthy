package com.imrancluster.physiology.controller;

import com.imrancluster.physiology.model.Hospital;
import com.imrancluster.physiology.services.HospitalService;
import com.imrancluster.physiology.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/hospital")
@CrossOrigin
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewHospital(@Valid @RequestBody Hospital hospital, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null) return errorMap;

        Hospital hospital1 = hospitalService.saveOrUpdateHospital(hospital);

        return new ResponseEntity<Hospital>(hospital1,HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<?> updateHospital(@Valid @RequestBody Hospital hospital, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.mapValidationService(result);
        if(errorMap != null) return errorMap;

        Hospital hospital1 = hospitalService.saveOrUpdateHospital(hospital);

        return new ResponseEntity<Hospital>(hospital1,HttpStatus.OK);
    }

    @GetMapping("/{hospitalId}")
    public ResponseEntity<?> getHospital(@PathVariable Long hospitalId) {

        Optional<Hospital> hospital = hospitalService.getHospitalById(hospitalId);

        return new ResponseEntity<Optional<Hospital>>(hospital, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Hospital> getAllHospital() {

        return hospitalService.getAllHospital();

    }


}
