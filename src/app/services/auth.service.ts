import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === 'password') {
      return of(true);
    } else {
      return throwError(() => new Error('Invalid credentials'));
    }
  }
}
