import { Component } from '@angular/core';
import { Client } from '../../../models/client.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-client-create',
  standalone: true,
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
})
export class ClientCreateComponent {
  clients: Client[] = [];
  client: Client = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  createClient(): void {
    this.client.id = this.clients.length ? Math.max(...this.clients.map(c => c.id)) + 1 : 1;
    this.client.createdAt = new Date();
    this.client.updatedAt = new Date();
    
    this.clients.push({ ...this.client });
    this.resetForm();
  }

  resetForm(): void {
    this.client = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      address: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
}
