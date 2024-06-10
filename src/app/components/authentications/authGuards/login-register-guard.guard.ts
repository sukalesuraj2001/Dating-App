import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!this.isLoggedIn()) {
      return true; // Allow access if user is not logged in
    } else {
      this.router.navigate(['/home']); // Redirect to home if user is logged in
      return false;
    }
  }

  isLoggedIn(): boolean {
    // Check if token is present in localStorage or any other authentication mechanism
    return !!localStorage.getItem('token');
  }
}
