import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
//     this.registerForm = new FormGroup({
//       name: new FormControl('', Validators.required),
//       email: new FormControl('', Validators.required),
//       username: new FormControl('', [Validators.required, Validators.pattern(/^\S*$/),]),
//       password: new FormControl(
//         '',
//         [
//           Validators.required,
//           Validators.minLength(8),
//           Validators.pattern(
//             '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$'
//           ),
//         ],
//     ),
//       confirmPassword: new FormControl('', Validators.required),
//     },
//     {
//       validators: this.passwordMatchValidator, // Apply the custom validator here
//     }

  
//   );

  this.registerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$'
          ),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    {
      Validators: this.passwordMatchValidator, // Apply the custom validator here
    }
  );

  }

  get formControls() {
    return this.registerForm.controls
  }

  handleSubmitForm(){
    console.log(this.registerForm)
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
        return { passwordMismatch: true };
    }
    return null;
  }



}
