import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [
    CommonModule,        // *ngIf, *ngFor, etc
    ReactiveFormsModule, // Reactive Forms
    HttpClientModule,    // Http requests
    RouterModule
  ],
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent implements OnInit {

  postCustomerForm!: FormGroup;
  serverError: string | null = null;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(150), Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/)]],
      phone: [null, [Validators.required, Validators.maxLength(20), Validators.pattern(/^[+]?[(]?[0-9]{1,4}[)]?[0-9\s.-]{6,15}$/)]]
    });
  }

  postCustomer() {
    this.serverError = null;
    if (this.postCustomerForm.valid) {
      this.customerService.postCustomer(this.postCustomerForm.value).subscribe({
        next: (res) => {
          console.log('Customer added successfully!', res);
          alert('Customer added successfully!');
          this.postCustomerForm.reset();

          // Go to the list of customers after successful addition
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error('Error adding customer:', err);
          this.serverError = err?.error?.message || 'Failed to add customer. Please try again.';
          alert(this.serverError);
        }
      });
    } else {
      console.warn('Form is invalid. Please fill in all required fields.');
      this.postCustomerForm.markAllAsTouched();
      alert('Please fix the highlighted fields and try again.');
    }
  }
}
