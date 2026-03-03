package com.app.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Employee;
import com.app.service.EmployeeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {
	private final EmployeeService empser;
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee) {
		return empser.postEmployee(employee);
	}
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return empser.getAllEmployees();
	}
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable int id){
		try {
			empser.deleteEmployee(id);
			return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
		}
		catch (Exception e) {
			return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable int id){
		Employee e = empser.getEmployeeById(id);
		if(e == null) return ResponseEntity.notFound().build();
		return ResponseEntity.ok(e);
	}
	@PatchMapping("/employee/{id}")
	public ResponseEntity<?> updateEmployee(@PathVariable int id, @RequestBody Employee employee){
		Employee updateEmployee = empser.updateEmployee(id, employee);
		if(updateEmployee == null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		return ResponseEntity.ok(updateEmployee);
	}
}