import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinneradmin',
  templateUrl: './spinneradmin.component.html',
  styleUrls: ['./spinneradmin.component.css']
})
export class SpinneradminComponent {
 @ Input() loadingadmin : boolean =  false;
}
