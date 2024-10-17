import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule]
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'actions'];
  dataSource = new MatTableDataSource<Client>();
  searchTerm: string = '';

  clients: Client[] = [
    {
      id: 1,
      name: 'Alice Dupont',
      email: 'alice@example.com',
      phone: '1234567890',
      address: '10 Rue de Paris',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01')
    },
    {
      id: 2,
      name: 'Bob Martin',
      email: 'bob@example.com',
      phone: '0987654321',
      address: '20 Avenue de la République',
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    },
    {
      id: 3,
      name: 'Céline Lefèvre',
      email: 'celine@example.com',
      phone: '1112223333',
      address: '30 Boulevard Saint-Michel',
      createdAt: new Date('2024-03-01'),
      updatedAt: new Date('2024-03-01')
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.dataSource.data = this.clients;
  }

  deleteClient(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clients = this.clients.filter(client => client.id !== id);
      this.loadClients();
    }
  }

  filterClients(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.applyFilter(input.value);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
