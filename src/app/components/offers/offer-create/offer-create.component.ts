import { Component } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { Offer } from '../../../models/offer.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offer-create',
  standalone: true,
  templateUrl: './offer-create.component.html',
  styleUrls: ['./offer-create.component.css'],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class OfferCreateComponent {
  offer: Offer = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private offerService: OfferService) {}

  createOffer(): void {
    this.offerService.createOffer(this.offer).subscribe(() => {
      // Logique après la création de l'offre
    });
  }
}
