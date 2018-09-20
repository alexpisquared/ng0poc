import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signinUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username')
    const password = target.querySelector('#password')

    this.auth.getUserDetails(username, password).subscribe(data=> {
      // if(data.success){
      //   //redirect hte person to /admin
      // }else{
      //   window.alert(data.message)
      window.alert("data.message")
      }
    })
    console.log(username, password)
  }
}
