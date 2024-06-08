import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss'],
  standalone:true,
  imports:[RouterLink]
})
export class MessageContainerComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("first")
  }

}
