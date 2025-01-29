import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    'Angular', 'React', 'JavaScript', 'Node JS', 'Jasmine', 'Bootstrap', 'CSS', 'HTML', 'Redux', 'SOLID Principles',
    'Aprendo rápido', 'Coaching', 'Aprendizaje continuo', 'Pair Programming', 'Trabajo en equipo', 'Liderazgo inclusivo',
    'Pensamiento abstracto', 'Escucha activa', 'Metodologías ágiles', 'Responsive Layout', 'Resolución de problemas',
    'Gestión del cambio', 'POO (Programación orientada a objetos)'
  ];
}
