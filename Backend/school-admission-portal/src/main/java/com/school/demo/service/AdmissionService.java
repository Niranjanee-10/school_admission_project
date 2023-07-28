package com.school.demo.service;

import java.util.List;

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
	public List<Admission>getAllDetails()
	{

	return re.findAll();
	}
//	public Optional<Admission> getAllDetails(String fname)
//	{
//
//	return re.findById(fname);
//	}
	
	public String changeDetails(Admission a) {
		re.save(a);
		return "updated";
		}
	public void deleteDetails(String fname)
		{
		re.deleteById(fname);
		}

}
