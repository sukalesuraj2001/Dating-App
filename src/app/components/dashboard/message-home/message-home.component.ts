import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-message-home',
  templateUrl: './message-home.component.html',
  styleUrls: ['./message-home.component.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule,RouterLink],
 
})
export class MessageHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true,


      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
