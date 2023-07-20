package com.school.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.demo.entity.Admission;
import com.school.demo.service.AdmissionService;

@RestController
public class AdmissionController {
	@Autowired
	private AdmissionService ser;
	@PostMapping("/admis")
	public Admission postDetails(@RequestBody Admission a) {
		return ser.addDetails(a);
	}
	
	
	

}
