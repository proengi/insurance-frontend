import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule, FormsModule] // Ajout de FormsModule ici
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  searchTerm: string = '';

  isCreatingUser: boolean = false;

  users: User[] = [
    { id: 1, username: 'admin', email: 'admin@example.com', password: 'wwwwwwwww', role: 'Administrator', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, username: 'user1', email: 'user1@example.com', password: 'wwwwwwwww', role: 'User', createdAt: new Date(), updatedAt: new Date() },
    { id: 3, username: 'user2', email: 'user2@example.com', password: 'wwwwwwwww', role: 'User', createdAt: new Date(), updatedAt: new Date() },
  ];

  newUser: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    role: 'User',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.dataSource.data = this.users;
  }

  deleteUser(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.users = this.users.filter(user => user.id !== id);
      this.loadUsers();
    }
  }

  filterUsers(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.applyFilter(input.value);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  startCreatingUser(): void {
    this.isCreatingUser = true;
  }

  createUser(): void {
    if (!this.newUser.username || !this.newUser.email) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.newUser.id = this.users.length + 1;
    this.users.push({ ...this.newUser, createdAt: new Date(), updatedAt: new Date() });
    this.loadUsers();
    this.resetForm();
    this.isCreatingUser = false;
  }

  resetForm(): void {
    this.newUser = {
      id: 0,
      username: '',
      email: '',
      password: '',
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
