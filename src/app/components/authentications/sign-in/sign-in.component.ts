import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../authService/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [RouterOutlet, RouterLink,ReactiveFormsModule,CommonModule],
})
export class SignInComponent  implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private authService: UserService,
    private router:Router ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      const userData = this.form.value;
      this.authService._signInUser$(userData).subscribe({
        next: (res) => {
          alert("user login successfully !!!");
          this.router.navigate(['/home'])
        },
        error: (err) => {
          console.error("Error:", err);
        }
      });
    }
  }
  

}
