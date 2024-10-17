import { Component } from '@angular/core';
import { FaqService } from '../../../services/faq.service';
import { Faq } from '../../../models/faq.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-faq-create',
  standalone: true,
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.css'],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class FaqCreateComponent {
  faq: Faq = {
    id: 0,
    question: '',
    answer: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private faqService: FaqService) {}

  createFaq(): void {
    this.faqService.createFaq(this.faq).subscribe(() => {
      // Ajouter la logique ici...
    });
  }
}
