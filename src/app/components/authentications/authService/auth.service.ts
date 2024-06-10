import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/enviroments/enviroments';
import { User } from '../interface/userInterface';
import { registerEndpoint, signInEndpoint, userEndpoint } from 'src/app/enviroments/userEndpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  registerUser(userData: User): Observable<User> {
    const registerUrl = `${this.apiUrl}${userEndpoint}${registerEndpoint}`;
    return this.http.post<User>(registerUrl, userData);
    }
    
    _signInUser$(userData: User):Observable<User>{
      const signInUrl = `${this.apiUrl}${userEndpoint}${signInEndpoint}`;
      return this.http.post<User>(signInUrl, userData).pipe(
        tap((res: any) => {
          console.log("res",res.token)
          localStorage.setItem('token', res.token);
        })
      );


  }
}
