import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ProyectsModule } from 'src/app/components/proyects/proyects.module';
import { AboutModule } from '../../components/about/about.module';
import { NavOverlayModule } from '../../components/nav-overlay/nav-overlay.module';
import { TechStackModule } from '../../components/tech-stack/tech-stack.module';
import { MainRoutingModule } from './main.-routing.module';
import { MainComponent } from './main.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { LatestExperienceComponent } from '../../components/latest-experience/latest-experience.component';

@NgModule({
  declarations: [
    MainComponent,
    SkillsComponent,
    LatestExperienceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ProyectsModule,
    FooterModule,
    TechStackModule,
    AboutModule,
    NavOverlayModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
