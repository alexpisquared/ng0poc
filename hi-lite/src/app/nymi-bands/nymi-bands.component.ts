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
  textA0 = new FormControl('A0 - 12345 54321');
  textA1 = new FormControl('A1 - Ab:cd:ef:gh');
  textA2 = new FormControl('A2 - 11:22:33:44');
  textA3 = new FormControl('A3 - 0x79172fabc');
  textA4 = new FormControl('A4 - adc23-qwert');
  textB0 = new FormControl('B0 - Note 1');
  textB1 = new FormControl('B1 - Abcdefg');
  textB2 = new FormControl('B2 - Single abd user');
  textB3 = new FormControl('B3 - Note for the band');
  textB4 = new FormControl('B4 - History repearer');
  textC0 = new FormControl('C0 - 12345 54321');
  textC1 = new FormControl('C1 - Ab:cd:ef:gh');
  textC2 = new FormControl('C2 - 11:22:33:44');
  textC3 = new FormControl('C3 - 0x79172fabc');
  textC4 = new FormControl('C4 - adc23-qwert');
  textD0 = new FormControl('D0 - Note 1');
  textD1 = new FormControl('D1 - Abcdefg');
  textD2 = new FormControl('D2 - Single abd user');
  textD3 = new FormControl('D3 - Note for the band');
  textD4 = new FormControl('D4 - History repearer');
  searchedWordsControl = new FormControl('');
  searchedWords$: Observable<string[]> = this.searchedWordsControl.valueChanges.pipe(map((search: string) => search.trim().split(' ')));

  @ViewChild('focus0') nameField: ElementRef;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {      this.nameField.nativeElement.focus();    }, 1000);
  }
}
