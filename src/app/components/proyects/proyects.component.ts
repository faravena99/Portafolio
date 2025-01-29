import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  projects: any = [];

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.fetchProjects();
  }

  initializeSwiper() {
    setTimeout(() => {
      const swiper = new Swiper('.swiper-container', {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        speed: 800,
        grabCursor: true,
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      });
    }, 100);
  }

  fetchProjects() {
    const username = 'faravena99'; // Cambia por tu nombre de usuario de GitHub
    this.http
      .get<any[]>(`https://api.github.com/users/${username}/repos`)
      .subscribe((repos) => {
        this.projects = repos.map((repo) => ({
          title: repo.name,
          description: repo.description || 'Sin descripción',
          link: repo.html_url
        }));
        this.initializeSwiper(); // Inicializa el swiper después de cargar los proyectos
      });
  }
}

