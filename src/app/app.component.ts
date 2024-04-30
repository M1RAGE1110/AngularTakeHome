import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'take-home-test';

  constructor(private router: Router) {}

  navigateToUserList() {
    this.router.navigateByUrl('/user-list');
  }
}
