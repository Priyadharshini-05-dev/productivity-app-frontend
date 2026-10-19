import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

catOptions: AnimationOptions = {
    path: 'assets/animation/cat_fishing.json',
    autoplay: true,
    loop: true
  };
}
