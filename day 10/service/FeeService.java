package com.school.demo.service;

//import org.springframework.beans.factory.annotation.;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.demo.entity.Fee;
import com.school.demo.repo.FeeRepo;
@Service
public class FeeService {
	@Autowired
	private FeeRepo r;
	public Fee addDetails (Fee f) {
		return r.save(f);
	}

}
