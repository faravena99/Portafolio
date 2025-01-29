import { Component } from '@angular/core';

interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  technologies: TechItem[] = [
    { name: 'Angular', icon: 'bi bi-code-slash', category: 'frontend' },
    { name: 'TypeScript', icon: 'bi bi-braces', category: 'frontend' },
    { name: 'Redux', icon: 'bi bi-diagram-3', category: 'frontend' },
    { name: 'RxJS', icon: 'bi bi-infinity', category: 'frontend' },
    { name: 'Node.js', icon: 'bi bi-server', category: 'backend' },
    { name: 'SQL', icon: 'bi bi-database', category: 'backend' },
    { name: 'Postman', icon: 'bi bi-send', category: 'tools' },
    { name: 'HTML5', icon: 'bi bi-file-earmark-code', category: 'frontend' },
    { name: 'CSS3', icon: 'bi bi-brush', category: 'frontend' },
    { name: 'Bootstrap', icon: 'bi bi-bootstrap', category: 'frontend' }
  ];

  get frontendTech() {
    return this.technologies.filter(tech => tech.category === 'frontend');
  }

  get backendTech() {
    return this.technologies.filter(tech => tech.category === 'backend');
  }

  get toolsTech() {
    return this.technologies.filter(tech => tech.category === 'tools');
  }
}
