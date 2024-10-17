import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    
    UserListComponent,
    UserCreateComponent,
    ClientListComponent,
    ClientCreateComponent,
    OfferListComponent,
    OfferCreateComponent,
    CmsPageListComponent,
    CmsPageCreateComponent,
    FaqListComponent,
    FaqCreateComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule { }
