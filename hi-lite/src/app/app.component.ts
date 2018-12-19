import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hi-lite';

  constructor(private router: Router) {}

  goAdmin() {
    this.router.navigate(['home-admin']);
  }
}
