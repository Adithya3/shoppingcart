import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkFlag: boolean

  constructor(private loginservice: LoginService,private router:Router) {
  }

  ngOnInit() {
  }

  passvariables(username: string, password: string) {
    this.checkFlag = this.loginservice.logincheck(username, password)
    if (this.checkFlag==true){
      this.router.navigate(['/home'])
    }
  }


}
