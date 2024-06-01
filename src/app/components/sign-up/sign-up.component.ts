import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, HttpClientModule, NgClass],
  providers: [AuthService, HttpClient],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  public signUpForm: FormGroup;
  public buyer: boolean = true;
  public checkedTerm: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required,Validators.email]],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      isBuyer: [this.buyer,[Validators.required]],
      isCheckedTerm:[this.checkedTerm,[Validators.required]]
    });
  }

  isBuyerHandle(value: boolean) {
    this.buyer = value;
    this.signUpForm.patchValue({ isBuyer: value });
  }
  checked(){
    this.checkedTerm = !this.checkedTerm;
    this.signUpForm.patchValue({ isCheckedTerm: this.checkedTerm });
  }

  signUp() {
    if (this.signUpForm.valid) {
      this.authService.register(this.signUpForm.value).subscribe((res: any) => {
        if (res) {
          this.router.navigate(['/login']);
        }
      });
    }

  }
}
