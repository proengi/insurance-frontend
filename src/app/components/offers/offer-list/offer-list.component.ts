import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../../services/offer.service';
import { Offer } from '../../../models/offer.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-offer-list',
  standalone: true,
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
  imports: [MatTableModule, MatButtonModule]
})
export class OfferListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'actions'];
  dataSource = new MatTableDataSource<Offer>();

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers(): void {
    this.offerService.getOffers().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteOffer(id: number): void {
    this.offerService.deleteOffer(id).subscribe(() => {
      this.loadOffers();
    });
  }
}
