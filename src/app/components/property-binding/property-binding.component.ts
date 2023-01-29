import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  website = {
    name: "Haz click para visitar la web",
    href: "https://www.google.com/",
    logo: '../../../assets/angular.png',
    description: 'El buscador mas famoso del mundo',
    width: '30'
  };
}
