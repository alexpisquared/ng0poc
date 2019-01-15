import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'app-materia-form-validation',
  templateUrl: 'materia-form-validation.component.html',
  styleUrls: ['materia-form-validation.component.scss']
})
export class MateriaFormValidationComponent {
  signInFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    domain: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  getErrorMessageE() {
    return this.signInFormGroup.value.email.hasError('required')
      ? 'You must enter a value'
      : this.signInFormGroup.value.email.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  getErrorMessageD() {
    return this.signInFormGroup.value.domain.hasError('required')
      ? 'You must enter a value'
      : this.signInFormGroup.value.domain.hasError('minLength')
      ? 'Domain too short'
      : '';
  }
}
