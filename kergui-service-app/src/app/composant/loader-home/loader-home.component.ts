import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader-home',
  templateUrl: './loader-home.component.html',
  styleUrls: ['./loader-home.component.css']
})
export class LoaderHomeComponent {
@Input() loaderuser : boolean = false;

}
