package com.school.demo.entity;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Admission {
	@Id
	private String fname;
	private String lname;
	private Date dob;
	private String place;
	private String religion;
	private String nationality;
	private String gender;
	private String address;
	private String aadhar;
	private String birth;
	private String report;

}
