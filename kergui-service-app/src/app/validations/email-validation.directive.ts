import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appEmailValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true}]
})
export class EmailValidationDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(control.value);

    if (!isValidFormat) {
      return { 'invalidFormat': true }; // Erreur de format d'email personnalisée
    }

    return null;
  }
}
