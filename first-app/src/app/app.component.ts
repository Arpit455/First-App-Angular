import { Component } from '@angular/core';
import {shopinglist} from './Shoping-list/shoping-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = {
    name:'first-app',
    number:'10'
  };
}
