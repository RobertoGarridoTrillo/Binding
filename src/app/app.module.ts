import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { StringInterpolacionComponent } from './components/string-interpolacion/string-interpolacion.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FilterBindingComponent } from './components/filter-binding/filter-binding.component';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { SafeNavigationComponent } from './components/safe-navigation/safe-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolacionComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    FilterBindingComponent,
    TemplateVariableComponent,
    NgModelComponent,
    SafeNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
