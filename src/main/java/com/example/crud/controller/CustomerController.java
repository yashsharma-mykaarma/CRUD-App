package com.example.crud.controller;

import com.example.crud.entity.Customer;
import com.example.crud.repository.CustomerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    private final CustomerRepository repository;

    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    // GET all customers
    @GetMapping
    public List<Customer> getAllCustomers() {
        return repository.findAll();
    }

    // POST customer
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return repository.save(customer);
    }

    // DELETE customer
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Customer updateCustomer(@PathVariable Long id, @RequestBody Customer updated) {
        Customer customer = repository.findById(id).orElseThrow();

        customer.setName(updated.getName());
        customer.setEmail(updated.getEmail());

        return repository.save(customer);
    }
}
