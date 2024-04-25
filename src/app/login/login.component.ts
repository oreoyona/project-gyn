import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardMdImage, MatCardModule, } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword = false; 

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {

      let username = this.form.value.username;
      let mdp = this.form.value.password;

      if(username == "admin"  && mdp == "admin"){
        this.route.navigateByUrl("/dashboard")
      }
      else{
        this.form.reset()
      }
    }
  }

  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  
    constructor(private route: Router){

    }
}
