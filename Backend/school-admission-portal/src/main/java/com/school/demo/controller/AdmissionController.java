package com.school.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.demo.entity.Admission;
import com.school.demo.service.AdmissionService;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class AdmissionController {
	@Autowired
	private AdmissionService ser;
	@PostMapping("/admis")
	public Admission postDetails(@RequestBody Admission a) {
		return ser.addDetails(a);
	}
	
	@GetMapping ("/get")
	public List<Admission>getDetails()
	{
		return ser.getAllDetails();
	}
//	@GetMapping ("/get/{fname}")
//	public Optional<Admission> getDetails(@PathVariable String fname)
//	{
//		return ser.getAllDetails(fname);
//	}
	@PutMapping("/put/{fname}")
	public String putDetails(@RequestBody Admission a ) {
		return ser.changeDetails(a);
	}
	
	@DeleteMapping("/del/{fname}")
	public void deletedetails(@PathVariable("fname") String fname)
	{
		ser.deleteDetails(fname);
	}
	
	
	

}
