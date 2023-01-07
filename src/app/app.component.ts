import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolacion';
  name = 'Roberto';
  textPlaceHolder="Escriba algo aqui, por favor";

  constructor() {
    setInterval(() => this.name = 'Garrido', 2000);
  };

  getSuma(numero1: number, numero2: number){
    return numero1 + numero2;

  }
}
