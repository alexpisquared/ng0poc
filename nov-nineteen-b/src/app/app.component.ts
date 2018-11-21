import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nov-nineteen-b';

  toggleTheme() {
    if (document.body.classList.contains('main-theme')) {
      document.body.classList.remove('main-theme');
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('main-theme');
    }
  }
}

