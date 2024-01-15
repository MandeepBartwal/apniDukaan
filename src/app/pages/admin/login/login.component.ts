import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObject: any = {
    username: '',
    password: ''
  }
  constructor(private router: Router){}

  login() {
    if (this.loginObject.username === 'admin' && this.loginObject.password === '12345') {
      this.router.navigateByUrl('/products')
    }else{
      alert('Please enter correct username and password')
    }
  }
}
