import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class UserCreateComponent {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private userService: UserService) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      // Logique après la création de l'utilisateur, par exemple: redirection ou affichage d'un message de succès
    });
  }
}
