import { style } from '@angular/animations';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGreenFont]'
})
export class GreenFontDirective {
@HostBinding('style.backgroundColor') backgroundColor : string;
  constructor() {
    this.backgroundColor ="#14A800";
   }

}
