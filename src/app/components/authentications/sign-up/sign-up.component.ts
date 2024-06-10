import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../authService/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, CommonModule],
})
export class SignUPComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private authService: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    if (group.get('password')?.value !== group.get('confirmPassword')?.value) {
      return { mismatch: true };
    }
    return null;
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      const userData = this.form.value;
      this.authService.registerUser(userData).subscribe(
        res => {
          console.log("User registered successfully!", res);
          alert("User registered successfully!");
          this.router.navigate(['/signIn']);

        },
        err => {
          console.error("User registration failed", err);
        }
      );
    }
  }
}
