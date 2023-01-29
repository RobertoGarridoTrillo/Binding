import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  texto = "";
  coordenadaX = 0;
  coordenadaY = 0;

  showElement = (event: MouseEvent) => {
    console.log(event);
    this.texto = (event.target as HTMLInputElement).innerText;
    this.coordenadaX = event.offsetX;
    this.coordenadaY = event.offsetY;
  }

}
