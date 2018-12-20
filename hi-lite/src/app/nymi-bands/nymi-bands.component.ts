import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nymi-bands',
  templateUrl: './nymi-bands.component.html',
  styleUrls: ['./nymi-bands.component.scss']
})
export class NymiBandsComponent implements OnInit {
  textA0 = new FormControl('12345 54321');
  textA1 = new FormControl('Ab:cd:ef:gh');
  textA2 = new FormControl('11:22:33:44');
  textA3 = new FormControl('0x79172fabc');
  textA4 = new FormControl('adc23-qwert');
  textB0 = new FormControl('Note 1');
  textB1 = new FormControl('Abcdefg');
  textB2 = new FormControl('Single abd user');
  textB3 = new FormControl('Note for the band');
  textB4 = new FormControl('History repearer');
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));

  @ViewChild('focus0') nameField: ElementRef;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {      this.nameField.nativeElement.focus();    }, 1000);
  }
}
