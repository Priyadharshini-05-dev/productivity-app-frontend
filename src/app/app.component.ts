import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: AnimationOptions = {
    path: 'assets/animation/cat_fishing.json',
    autoplay: true,
    loop: true
  };
}
