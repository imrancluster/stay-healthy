package com.imrancluster.physiology.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Clinician {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    private String hospitalIdentifier;

    @NotBlank
    private String type;

    @ManyToOne(cascade= {
             CascadeType.DETACH,
             CascadeType.MERGE,
             CascadeType.PERSIST,
             CascadeType.REFRESH})
    @JoinColumn(name="hospital_id")
    @JsonIgnore
    private Hospital hospital;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Column(updatable = false)
    private Date createdOn;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updatedOn;

    public Clinician() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Hospital getHospital() {
        return hospital;
    }

    public void setHospital(Hospital hospital) {
        this.hospital = hospital;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getHospitalIdentifier() {
        return hospitalIdentifier;
    }

    public void setHospitalIdentifier(String hospitalIdentifier) {
        this.hospitalIdentifier = hospitalIdentifier;
    }

    @PrePersist
    protected void onCreate() {
        this.createdOn = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedOn = new Date();
    }
}
