import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginUser:any ={};

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  loginDetails(loginValue){
    this.libraryService.login(loginValue).subscribe(rslt => {
      this.loginUser = rslt;
      alert('YOu have successfully logged in');

    });

  }
}