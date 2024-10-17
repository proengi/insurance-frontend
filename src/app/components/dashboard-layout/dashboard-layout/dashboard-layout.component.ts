import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {}
