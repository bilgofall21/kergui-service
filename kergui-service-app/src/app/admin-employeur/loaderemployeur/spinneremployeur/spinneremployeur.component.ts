import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinneremployeur',
  templateUrl: './spinneremployeur.component.html',
  styleUrls: ['./spinneremployeur.component.css']
})
export class SpinneremployeurComponent {
@ Input() loadingemployeur : boolean = false;
}
