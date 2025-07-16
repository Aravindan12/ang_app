import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.form.username && this.form.password) {
      this.auth.login(this.form).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          alert('Logged in!');
          this.router.navigate(['/home'])
        },
        error: err => alert('Login failed: ' + err.error.message)
      });
    }
  }
}
