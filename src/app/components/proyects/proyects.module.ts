import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectsComponent } from './proyects.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleFormatPipe } from '../../pipes/title-format.pipe';

@NgModule({
  declarations: [
    ProyectsComponent,
    TitleFormatPipe
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [ProyectsComponent],
})
export class ProyectsModule {}
