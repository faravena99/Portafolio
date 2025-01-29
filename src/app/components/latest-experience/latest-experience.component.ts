import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-experience',
  templateUrl: './latest-experience.component.html',
  styleUrls: ['./latest-experience.component.scss']
})
export class LatestExperienceComponent {
  experience = {
    title: 'Frontend Developer',
    company: '2Brains',
    period: 'Marzo 2023 - Actualidad',
    location: 'Santiago, Chile',
    description: 'Desarrollador Frontend en 2Brains, trabajando en proyectos de alto impacto para el sector bancario, utilizando Angular y tecnologías modernas para optimizar la experiencia del usuario.'
  };
}
