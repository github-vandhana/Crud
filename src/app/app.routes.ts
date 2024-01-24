import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list/client-list.component';
import { ClientDetailsComponent } from './Clients/client-details/client-details.component';
import { ClientDetailsEditComponent } from './edit/client-details-edit/client-details-edit.component';
import { ClientAddDetailsComponent } from './new-client/client-add-details/client-add-details.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {
    path:'',
    component:ClientListComponent
  },
  {
    path:'list',
    component:ClientDetailsComponent,
  },
  {
    path:'edit',
    component:ClientDetailsEditComponent
  },
  {
    path:'add',
    component:ClientAddDetailsComponent
  },
  {
    path:'',
    component:HeaderComponent
  },



];
