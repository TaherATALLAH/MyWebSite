import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles() {
    this.http.get('http://localhost:5000/profile').subscribe(response => {
      this.profile = response;
    }, error => {
      console.log(error);
          });
  }
}
