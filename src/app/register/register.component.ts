import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private message: NzMessageService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(4)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      phone: new FormControl('',Validators.required),
      gdpr: new FormControl('false',Validators.requiredTrue),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    this.authService.user = this.registerForm.value;
    this.authService.translateCount = 0;
    this.message.success('Sikeres regisztráció!', {
      nzDuration: 2000
    })              
    this.router.navigateByUrl('/translate');
  }
}
