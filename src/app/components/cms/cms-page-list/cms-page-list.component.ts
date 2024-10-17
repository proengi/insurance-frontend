import { Component, OnInit } from '@angular/core';
import { CmsPageService } from '../../../services/cms-page.service';
import { CmsPage } from '../../../models/cms-page.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cms-page-list',
  standalone: true,
  templateUrl: './cms-page-list.component.html',
  styleUrls: ['./cms-page-list.component.css'],
  imports: [MatTableModule, MatButtonModule]
})
export class CmsPageListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'actions'];
  dataSource = new MatTableDataSource<CmsPage>();

  constructor(private cmsPageService: CmsPageService) {}

  ngOnInit(): void {
    this.loadCmsPages();
  }

  loadCmsPages(): void {
    this.cmsPageService.getPages().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteCmsPage(id: number): void {
    this.cmsPageService.deletePage(id).subscribe(() => {
      this.loadCmsPages();
    });
  }
}
