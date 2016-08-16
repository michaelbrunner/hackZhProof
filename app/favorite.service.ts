import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { Favorite } from "./favorite";

@Injectable()
export class FavoriteService {
    //https://hackzurich16.azurewebsites.net/axa/customers/1088/favorites
    private customerBaseUrl = 'https://hackzurich16.azurewebsites.net/axa/customers/';
    private favoritesExtensionUrl = '/favorites';

    constructor(private http:Http) {
    }

    getFavorites(customerId:string) {
        let s = new Subject<Favorite[]>();
        let requestUrl = this.customerBaseUrl + customerId + this.favoritesExtensionUrl;
        this.http.get(requestUrl)
            .subscribe(response => s.next(<Favorite[]>response.json()),
                error => s.error(error));
        return s;
    }
}
