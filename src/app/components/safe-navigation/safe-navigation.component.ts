import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-navigation',
  templateUrl: './safe-navigation.component.html',
  styleUrls: ['./safe-navigation.component.css']
})
export class SafeNavigationComponent {
  lenguajes = {
    frontEnd:{
      html: 'HTML',
      css: 'Cascading Style Sheets',
      js: undefined
    },
    backEnd: {
      php: "",
      node: null
    }
  }
}
