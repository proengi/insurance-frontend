import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'wwwwwwwww', role: 'Administrator', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, username: 'user1', email: 'user1@example.com', password: 'wwwwwwwww',role: 'User', createdAt: new Date(), updatedAt: new Date() },
    { id: 3, username: 'user2', email: 'user2@example.com', password: 'wwwwwwwww',role: 'User', createdAt: new Date(), updatedAt: new Date() },
  ];

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User): Observable<void> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return of();
  }

  deleteUser(id: number): Observable<void> {
    this.users = this.users.filter(user => user.id !== id);
    return of(); // Simuler delete réussie...
  }
}
