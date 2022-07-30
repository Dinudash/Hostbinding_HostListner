import { Component,Input,HostBinding } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  fname='angular';
  @Input() name:string ;
 

allow()
{
  alert('cursor clicked on body')
}
 
}
