import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', phone: '0111111111', address: 'example 1', createdAt: new Date(), updatedAt: new Date() },
    { id: 2, name: 'Marie Curie', email: 'marie.curie@example.com', phone: '0222222222', address: 'example 2',createdAt: new Date(), updatedAt: new Date() },
    { id: 3, name: 'Albert Einstein', email: 'albert.einstein@example.com', phone: '0333333333', address: 'example 3',createdAt: new Date(), updatedAt: new Date() },
  ];

  getClients(): Observable<Client[]> {
    return of(this.clients); // Simuler une API avec des données fictives
  }

  createClient(client: Client): Observable<void> {
    client.id = this.clients.length + 1;
    this.clients.push(client);
    return of();
  }

  deleteClient(id: number): Observable<void> {
    this.clients = this.clients.filter(client => client.id !== id);
    return of();
  }
}
