import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: any[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.users = users;
      });
  }
  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }
}

