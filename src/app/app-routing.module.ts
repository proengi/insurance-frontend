import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { OfferListComponent } from './components/offers/offer-list/offer-list.component';
import { OfferCreateComponent } from './components/offers/offer-create/offer-create.component';
import { CmsPageListComponent } from './components/cms/cms-page-list/cms-page-list.component';
import { CmsPageCreateComponent } from './components/cms/cms-page-create/cms-page-create.component';
import { FaqListComponent } from './components/faqs/faq-list/faq-list.component';
import { FaqCreateComponent } from './components/faqs/faq-create/faq-create.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout/dashboard-layout.component';

// Définir les routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UserListComponent },
      { path: 'users/create', component: UserCreateComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'clients/create', component: ClientCreateComponent },
      { path: 'offers', component: OfferListComponent },
      { path: 'offers/create', component: OfferCreateComponent },
      { path: 'cms', component: CmsPageListComponent },
      { path: 'cms/create', component: CmsPageCreateComponent },
      { path: 'faqs', component: FaqListComponent },
      { path: 'faqs/create', component: FaqCreateComponent },
    ]
  },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
