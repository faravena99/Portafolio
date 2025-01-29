import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechStackComponent } from './tech-stack.component';


@NgModule({
  declarations: [TechStackComponent],
  imports: [
    CommonModule,
  ],
  exports: [TechStackComponent]
})
export class TechStackModule { }
