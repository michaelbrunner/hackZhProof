import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { CustomerSearchComponent } from "./customer-search.component";
import { CustomerService } from "./customer.service";
import { FavoriteItemComponent } from "./favorite-item.component";
import { FavoriteListComponent } from "./favorite-list.component";
import { routing } from './app.routing';
import { HttpModule } from "@angular/http";
import { FavoriteService } from "./favorite.service";
import { GOOGLE_MAPS_PROVIDERS } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CustomerSearchComponent,
        FavoriteItemComponent,
        FavoriteListComponent
    ],
    providers: [
        CustomerService,
        FavoriteService,
        GOOGLE_MAPS_PROVIDERS
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
