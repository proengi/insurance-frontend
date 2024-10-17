import { Component } from '@angular/core';
import { CmsPageService } from '../../../services/cms-page.service';
import { CmsPage } from '../../../models/cms-page.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cms-page-create',
  standalone: true,
  templateUrl: './cms-page-create.component.html',
  styleUrls: ['./cms-page-create.component.css'],
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class CmsPageCreateComponent {
  cmsPage: CmsPage = {
    id: 0,
    title: '',
    content: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };

  constructor(private cmsPageService: CmsPageService) {}

  createCmsPage(): void {
    this.cmsPageService.createPage(this.cmsPage).subscribe(() => {
      // Logique ici...
    });
  }
}
