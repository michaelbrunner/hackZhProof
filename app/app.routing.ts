import { Routes, RouterModule } from '@angular/router';
import { CustomerSearchComponent } from './customer-search.component';
import { FavoriteListComponent } from './favorite-list.component';

const appRoutes:Routes = [
    { path: '', redirectTo: 'customersearch', terminal: true },
    {
        path: 'customersearch',
        component: CustomerSearchComponent,
    },
    {
        path: 'favorites/:id',
        component: FavoriteListComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
