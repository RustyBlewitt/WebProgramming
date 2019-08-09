import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {this.error= false;}

  useremail: string;
  userpassword: string;
  error: boolean;

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    if( (this.useremail == 'test@email.com' && this.userpassword == 'password') || 
        (this.useremail == 'john@smith.com' && this.userpassword == '123456') ||
        (this.useremail == 'user@google.com' && this.userpassword == 'useruser') ) {
          console.log("Big success, welcome ", this.useremail);
          this.router.navigate(['account']);

      }
      else{
        this.error = true;
        console.log("useless, get it right");
      }

  }

}
