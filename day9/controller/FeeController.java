package com.school.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.school.demo.entity.Fee;
import com.school.demo.service.FeeService;


@CrossOrigin(origins="http://localhost:3000/")
@RestController
public class FeeController {
	
		@Autowired
	    private FeeService s;
		@PostMapping("/fee")
		public Fee postDetails(@RequestBody Fee f) {
			return s.addDetails(f);
		

}
}
