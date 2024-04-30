import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + userId)
      .subscribe(user => {
        this.user = user;
      });
  }
}