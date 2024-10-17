import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../../services/faq.service';
import { Faq } from '../../../models/faq.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css'],
  imports: [MatTableModule, MatButtonModule]
})
export class FaqListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'question', 'actions'];
  dataSource = new MatTableDataSource<Faq>();

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs(): void {
    this.faqService.getFaqs().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteFaq(id: number): void {
    this.faqService.deleteFaq(id).subscribe(() => {
      this.loadFaqs();
    });
  }
}
