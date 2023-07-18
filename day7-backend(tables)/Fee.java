package com.school.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
public class Fee {
	@Id
	private String name;
	private String mail;
	private int rollnum;
	private String std;

}
