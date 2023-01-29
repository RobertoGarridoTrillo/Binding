import {Component} from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {

  keySin = "";
  keyCon = "";

  logKeySin($event: KeyboardEvent) {
    this.keySin += $event.key;
  }
  logKeyCon(valor: HTMLInputElement) {
    this.keyCon = valor.value;
  }
}
