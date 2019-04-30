import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  saveUser:any ={};

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  saveUserDetails(signValue){
    this.libraryService.signUp(signValue).subscribe(rslt => {
      this.saveUser = rslt;
      alert('YOu have successfully signed up');

    });

  }

}
