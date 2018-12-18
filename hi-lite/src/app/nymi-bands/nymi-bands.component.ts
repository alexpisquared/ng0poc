import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nymi-bands',
  templateUrl: './nymi-bands.component.html',
  styleUrls: ['./nymi-bands.component.scss']
})
export class NymiBandsComponent implements OnInit {
  text = new FormControl('12345 song name person 54321');
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));

  constructor() {}

  ngOnInit() {}
}
