package com.school.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.demo.entity.Signup;

public interface SignUpRepo extends JpaRepository<Signup, String> {

}
