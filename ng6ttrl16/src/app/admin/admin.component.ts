import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getSomeData().subscribe(data=>{
      this.meesage = data.meesage
      if(!data.success){
        localStorage.removeItem('loggedIn')
      }
    })
  }
}
