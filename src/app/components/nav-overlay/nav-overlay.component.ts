import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
}

@Component({
  selector: 'app-nav-overlay',
  templateUrl: './nav-overlay.component.html',
  styleUrls: ['./nav-overlay.component.scss'],
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(-10px)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void <=> *', animate('200ms ease-out'))
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-10px)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class NavOverlayComponent {
  isOpen = false;
  menuItems: MenuItem[] = [
    { path: 'welcome', label: 'Inicio', icon: 'bi bi-house-door' },
    { path: 'about', label: 'Sobre mí', icon: 'bi bi-person' },
    { path: 'projects', label: 'Proyectos', icon: 'bi bi-code-square' },
    { path: 'latest-experience', label: 'Última Experiencia', icon: 'bi bi-briefcase' },
    { path: 'contact', label: 'Contacto', icon: 'bi bi-envelope' }
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  toggleMenu(event?: Event) {
    if (event) {
      event.stopPropagation(); // Solo si el evento existe
    }
    this.isOpen = !this.isOpen;
    document.body.style.overflow = this.isOpen ? 'hidden' : 'auto';
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.toggleMenu(); // Ahora podemos llamarlo sin parámetro
    }
  }
}
