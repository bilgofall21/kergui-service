import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBlueFont]'
})
export class BlueFontDirective {
@HostBinding('style.backgroundColor') backgroundColor : string ;
  constructor() {
    this.backgroundColor = "#3A6A7E";
   }

}
