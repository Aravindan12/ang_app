import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = { username: '', email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (this.form.username && this.form.email && this.form.password) {
      this.auth.register(this.form).subscribe({
        next: res =>   this.router.navigate(['/home']),
        error: err => alert(err.error.message)
        
      });
    }
  }
}
