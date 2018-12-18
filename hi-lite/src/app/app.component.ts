import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hi-lite';

  text = new FormControl('12345 song name person 54321');
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));

  constructor(private router: Router) {}

  goAdmin() {
    this.router.navigate(['home-admin']);
  }
}
