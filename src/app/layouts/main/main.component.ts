import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('typewriter') typewriterElement!: ElementRef;

  ngAfterViewInit() {
    this.initTypewriter();
  }

  private initTypewriter() {
    const text = 'Felipe Aravena';
    const element = this.typewriterElement.nativeElement;
    let index = 0;

    // Inicializa el contenido con el cursor
    element.innerHTML = '<span class="text"></span><span class="cursor"></span>';
    const textElement = element.querySelector('.text');
    const cursorElement = element.querySelector('.cursor');

    const writeText = () => {
      if (index === 0) {
        element.classList.remove('not-started');
      }
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(writeText, 150);
      } else {
        element.classList.add('finished');
        cursorElement.style.display = 'inline-block'; // Asegúrate de que el cursor siga visible
      }
    };

    writeText();
  }
}

