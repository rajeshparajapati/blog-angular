import { Component, OnInit } from '@angular/core';
import { CommonAccountVerifyService } from '../../services/common-account-verify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: CommonAccountVerifyService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
    this.router.navigate(['/signin']);

  }

}
