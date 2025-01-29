import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectsComponent } from './proyects.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProyectsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ProyectsComponent]
})
export class ProyectsModule { }
