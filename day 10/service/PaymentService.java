package com.school.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.demo.entity.Payment;
import com.school.demo.repo.PaymentRepo;

@Service

public class PaymentService {
	@Autowired
	private PaymentRepo r;
	public Payment addDetails (Payment p) {
		return r.save(p);
	}

}
