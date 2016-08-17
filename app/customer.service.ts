import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Customer } from './customer';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class CustomerService {
    //https://hackzurich16.azurewebsites.net/axa/customers/search/byName/$searchParam
    private customerBaseUrl = 'https://hackzurich16.azurewebsites.net/axa/customers/search/byName/';

    //https://hackzurich16.azurewebsites.net/axa/customers/search/near/46.731947,6.962926,1000
    private geosearchBaseUrl = 'https://hackzurich16.azurewebsites.net/axa/customers/search/near/';

    constructor(private http: Http) { }

    searchCustomerByName(searchParam: string) {
        let s = new Subject<Customer[]>();
        let requestUrl = this.customerBaseUrl + searchParam;
        this.http.get(requestUrl)
                 .subscribe(response => s.next(<Customer[]>response.json().data),
                            error => s.error(error));
        return s;
    }

    searchCustomerByCoordinates(longitude: string, latitude: string, radius: string) {
        let s = new Subject<Customer[]>();
        let requestUrl = this.geosearchBaseUrl + longitude + "," + latitude + "," + radius;
        this.http.get(requestUrl)
            .subscribe(response => s.next(<Customer[]>response.json().data),
                error => s.error(error));
        return s;
    }

    /*
    // Add new Movie
    private post(movie: Movie) {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        let s = new Subject<Movie>();
        this.http
            .post(this.moviesBaseUrl, JSON.stringify(movie), {headers: headers})
            .subscribe(response => response.json().data,
                       error => this.handleError(error));
        return s;
    }
*/
    // Update existing Movie
/*    private put(movie: Movie) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.moviesBaseUrl}/${movie.id}`;

        let s = new Subject<Movie>();
        this.http
            .put(url, JSON.stringify(movie), {headers: headers})
            .subscribe(response => s.next(<Movie>response.json()),
                       error => s.error(error));
        return s;
    }

    delete(movie: Movie) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.moviesBaseUrl}/${movie.id}`;

        let s = new Subject();
        this.http
            .delete(url, headers)
            .subscribe(response => s.next(response.json()),
                       error => s.error(error));
        return s;
    }*/

    /*save(movie: Movie) {
        if (movie.id) {
            return this.put(movie);
        }

        return this.post(movie);
    }
*/
    /*getMovie(id: number) {
        let s = new Subject<Movie>();
        this.getMovies().subscribe(movies => s.next(movies.filter(movie => movie.id === id)[0]));
        return s;
    }
*/
    private handleError(error: any) {
        console.error('An error occurred', error);
    }
}
