package com.school.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.demo.entity.Fee;

public interface FeeRepo extends JpaRepository<Fee, String> {

}
