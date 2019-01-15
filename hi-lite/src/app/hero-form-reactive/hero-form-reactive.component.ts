/* tslint:disable: member-ordering forin */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../shared/alter-ego.directive';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.scss']
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  signInFormGroup: FormGroup;

  ngOnInit(): void {
    this.signInFormGroup = new FormGroup(
      {
        name: new FormControl(this.hero.name, [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]),
        alterEgo: new FormControl(this.hero.alterEgo, {
          asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
          updateOn: 'blur'
        }),
        power: new FormControl(this.hero.power, Validators.required)
      },
      { validators: identityRevealedValidator }
    ); // <-- add custom validator at the FormGroup level
  }

  get name() {
    return this.signInFormGroup.get('name');
  }

  get power() {
    return this.signInFormGroup.get('power');
  }

  get alterEgo() {
    return this.signInFormGroup.get('alterEgo');
  }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) {}
}
