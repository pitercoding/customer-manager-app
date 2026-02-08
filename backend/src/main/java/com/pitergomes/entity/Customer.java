package com.pitergomes.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 100, message = "Name must be between 3 and 100 characters")
    @Column(nullable = false, length = 100)
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    @Pattern(
        regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}(?:\\.[A-Za-z]{2,})?$",
        message = "Email must include a valid domain (e.g., .com or .com.br)"
    )
    @Size(max = 150, message = "Email must be at most 150 characters")
    @Column(nullable = false, length = 150)
    private String email;

    @NotBlank(message = "Phone is required")
    @Size(max = 20, message = "Phone must be at most 20 characters")
    @Pattern(
        regexp = "^[+]?[(]?[0-9]{1,4}[)]?[0-9\\s.-]{6,15}$",
        message = "Phone must be valid"
    )
    @Column(nullable = false, length = 20)
    private String phone;
}
