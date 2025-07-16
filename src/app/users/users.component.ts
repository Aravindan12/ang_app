import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

constructor(private auth: AuthService){}

  ngOnInit() {
    this.auth.users().subscribe({
      next: res => console.log(res),
      error: err => alert(err.error.message)
    });
  }
}
