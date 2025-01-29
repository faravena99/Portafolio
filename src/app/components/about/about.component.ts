import { Component } from '@angular/core';

interface StatItem {
  number: string;
  label: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  personalInfo = {
    name: 'Felipe Alejandro Aravena Ponce',
    title: 'Front End Senior Developer',
    location: 'Santiago, Región Metropolitana',
    contact: {
      phone: '(56)973665437',
      email: 'felipe.aravena99@gmail.com',
      linkedin: 'https://linkedin.com/in/felipe-alejandro-aravena-ponce-174430163/',
      github: 'https://github.com/faravena99'
    },
    description: 'Desarrollador Front End Senior con 5 años de experiencia en la creación de aplicaciones de alto rendimiento para el sector bancario. Especializado en Angular principalmente y React, con un enfoque en la optimización de la experiencia del usuario y la implementación de prácticas de desarrollo ágiles.'
  };


  skills = [
    'Angular', 'React', 'JavaScript', 'Node JS', 'Jasmine', 'Bootstrap', 'CSS', 'HTML', 'Redux', 'SOLID Principles'
  ];

  education = [
    {
      course: 'Angular Developer',
      institution: 'Escalab Tech Talent Hub',
      location: 'Santiago Centro',
      date: 'Mayo 2022',
      credential: 'https://www.credly.com/badges/83535e78-400a-4e48-8181-6c026b24d368?source=linked_in_profile'
    }
  ];

  features: string[] = [
    'Desarrollo Frontend Moderno',
    'Diseño Responsivo',
    'Optimización de Rendimiento',
    'Clean Code'
  ];

  stats: StatItem[] = [
    { number: '5+', label: 'Años de Experiencia' },
    { number: '20+', label: 'Proyectos Completados' }
  ];
}
