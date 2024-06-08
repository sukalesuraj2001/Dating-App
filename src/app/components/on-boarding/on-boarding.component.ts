import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../authentications/sign-in/sign-in.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class OnBoardingComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    console.log("first")
  }


  signIn(){
    this.router.navigate(['/signIn'])
    // alert("click on link!!")
  }

}
