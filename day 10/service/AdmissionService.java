package com.school.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.school.demo.entity.Admission;
import com.school.demo.repo.AdmissionRepo;

@Service
public class AdmissionService {
	@Autowired
	private AdmissionRepo re;
	public Admission addDetails (Admission a) {
		return re.save(a);
	}

}
