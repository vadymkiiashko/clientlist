import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Carousel } from 'primeng/carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  carouselItems!: any[];
  responsiveOptions!: any[];

  @ViewChild('carousel') carousel!: Carousel;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.carouselItems = [
      {
        imageSource: '../../../dist/customer-grid/assets/imgFotor_AI（1）.png',
        alt: 'Slide 1',
      },
      {
        imageSource: './assets/img/Fotor_AI（2）.png',
        alt: 'Slide 2',
      },
      {
        imageSource: 'https://picsum.photos/seed/picsum/800/400',
        alt: 'Slide 3',
      },
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
