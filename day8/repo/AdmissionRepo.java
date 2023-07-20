package com.school.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.demo.entity.Admission;

public interface AdmissionRepo extends JpaRepository<Admission, String> {

}
