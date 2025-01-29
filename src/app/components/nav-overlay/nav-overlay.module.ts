import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavOverlayComponent } from './nav-overlay.component';

@NgModule({
  declarations: [NavOverlayComponent],
  imports: [
    CommonModule
  ],
  exports: [NavOverlayComponent]
})
export class NavOverlayModule { }
