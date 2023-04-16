import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';



interface User {
  login : string,
  password : string
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users : User[] = [
    { login: 'user1', password: 'password1' },
    { login: 'user2', password: 'password2' },
    { login: 'user3', password: 'password3' },
  ];
  private readonly apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) {}
  /*
  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
      .pipe(tap((response) => localStorage.setItem('token', response.token)));
  }
*/

  login(username: string, password: string): Observable<string> {
    const user  = this.users.find(
      (u) => u.login === username && u.password === password
    );
    if (user) {
      // authentication successful, return token
      const token = this.generateToken();
      localStorage.setItem('token' , token)
      return of(token).pipe(delay(1000)); // simulate delay of HTTP request
    } else {
      // authentication failed, return error
      return throwError('Invalid username or password');
    }
  }

  private generateToken(): string {
    // generate and return a random authentication token
    const generatedToken =
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2)
    ;
    console.log(`genereated token is ${generatedToken}`)
    return generatedToken
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.decodeToken(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const now = new Date();
      return expirationDate > now;
    }
    return false;
  }

  decodeToken(token: string): any {
    const decodedToken = jwt_decode(token);
    console.log(decodedToken)
    return decodedToken;
  }
}
