package com.app.service;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.entity.Employee;
import com.app.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {

	private final EmployeeRepository emp;
	public Employee postEmployee(Employee employee) {return emp.save(employee);}
	public List<Employee> getAllEmployees(){ return emp.findAll(); };
	public void deleteEmployee(int id) {
		if(!emp.existsById(id)) {
			throw new EntityNotFoundException("Employee Not Found");
		}
		else {
			emp.deleteById(id);
		}
	};
	public Employee getEmployeeById(int id) {
		return emp.findById(id).orElse(null);
	}
	public Employee updateEmployee(int id,Employee employee) {
		Optional<Employee> oe = emp.findById(id);
		if(oe.isPresent()) {
			Employee existingemployee = oe.get();
			existingemployee.setEmail(employee.getEmail());
			existingemployee.setName(employee.getName());
			existingemployee.setDepartment(employee.getDepartment());
			existingemployee.setPhone(employee.getPhone());
			return emp.save(existingemployee);
		}
		return null;
	}
}