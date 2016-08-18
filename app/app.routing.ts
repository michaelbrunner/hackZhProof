import { Routes, RouterModule } from '@angular/router';
import { CustomerGeoSearchComponent } from './customer-geo-search.component';
import { CustomerSearchComponent } from './customer-search.component';
import { FavoriteListComponent } from './favorite-list.component';


const appRoutes:Routes = [
    { path: '', redirectTo: 'customersearch', terminal: true },
    {
        path: 'customersearch',
        component: CustomerSearchComponent,
    },
    {
        path: 'customergeosearch',
        component: CustomerGeoSearchComponent
    },
    {
        path: 'favorites/:id',
        component: FavoriteListComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
