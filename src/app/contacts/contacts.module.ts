/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ContactsRoutingModule } from './contacts-routing.module';
/* Components */
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
/* Services */
import { ContactsService } from './services/contacts.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsListComponent,
    ContactCardComponent,
    NewContactComponent
  ],
  providers: [ContactsService]
})
export class ContactsModule { }
