import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import Swiper from 'swiper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
 


})
export class HomeComponent implements OnInit {
  isLiked: boolean = false;
  likesCount: number = 100;
  commentInput: string = '';
  comments: string[] = [];

  constructor() { }

  ngOnInit(): void {
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
    // like function
    const likedStatus = localStorage.getItem('isLiked');
    if (likedStatus && likedStatus === 'true') {
      this.isLiked = true;
    }
  }
  // refreshing page at drag 
  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

  // adding Likes
  toggleLike(): void {
    this.isLiked = !this.isLiked;
    localStorage.setItem('isLiked', this.isLiked.toString());
    if (this.isLiked) {
      this.likesCount++;
    } else {
      this.likesCount--;
    }
  }

  // adding comment

  logAndAddComment(): void {
    if (this.commentInput) {
      console.log(this.commentInput);
      this.comments.push(this.commentInput);
      this.commentInput = '';
    }
  }
  // adding home button functionality

 
  homePage() {
alert("hello")  }
  
}
