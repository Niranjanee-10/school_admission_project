package com.school.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.demo.entity.Payment;
import com.school.demo.service.PaymentService;

@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class PaymentController {

		@Autowired
		private PaymentService ser;
		@PostMapping("/pay")
		public Payment postDetails(@RequestBody Payment p) {
			return ser.addDetails(p);
		}

}
