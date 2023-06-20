import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { DonationsComponent } from './Components/donations/donations.component';
import { ContactsComponent } from './Components/contacts/contacts.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'donations', component:DonationsComponent},
  { path:'contacts', component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
