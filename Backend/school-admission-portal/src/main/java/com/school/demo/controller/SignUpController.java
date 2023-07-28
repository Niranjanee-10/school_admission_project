package com.school.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.school.demo.entity.Signup;
import com.school.demo.service.SignUpService;
@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class SignUpController {
	@Autowired
	private SignUpService ser;
	@PostMapping("/add")
	public Signup postDetails(@RequestBody Signup s) {
		return ser.addDetails(s);
	}
	
	

}
