import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isLoggedInUser = false;
  ngOnInit() {
    this.isLoggedInUser = !! localStorage.getItem('usertoken');
    console.log(this.isLoggedInUser);
  }

}
