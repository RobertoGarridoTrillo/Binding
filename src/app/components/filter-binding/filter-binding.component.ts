import {Component} from '@angular/core';

@Component({
  selector: 'app-filter-binding',
  templateUrl: './filter-binding.component.html',
  styleUrls: ['./filter-binding.component.css']
})
export class FilterBindingComponent {
  mouseX = 0;
  mouseY = 0;
  msg = "No pulses las teclas backspace o suprimir";
  msgFilter = "No pulses las teclas backspace o suprimir";
  isActive = false;
  isActiveFilter = false;

  mostrarCoordenadas(event: MouseEvent) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
  }

  logKeyNormal(event: KeyboardEvent) {
    if (event.key === "Backspace" || event.key === "Delete") {
      this.isActive = true;
      this.msg = "Me has desobedecido pulsando " + event.key + ", muy mal :(";
    } else this.isActive = false;
  }

  logKeyFilter() {
    this.isActiveFilter = true;
    this.msgFilter = "Me has desobedecido, muy mal :(";
  }
}
