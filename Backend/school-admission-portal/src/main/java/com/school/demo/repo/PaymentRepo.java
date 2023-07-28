package com.school.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.school.demo.entity.Payment;

public interface PaymentRepo extends JpaRepository<Payment, String> {

}
