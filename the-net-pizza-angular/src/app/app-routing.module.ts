import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuDetailComponent } from './components/menu-detail/menu-detail.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent },
  {path: 'menu/:piattoId', component: MenuDetailComponent },
  {path: 'contacts', component: ContactsComponent },
  {path: '**', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
