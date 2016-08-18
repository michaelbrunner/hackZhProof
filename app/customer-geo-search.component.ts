import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
    selector: 'customer-geo-search',
    templateUrl: 'app/customer-geo-search.component.html',
    styleUrls: ['app/customer-geo-search.component.css'],
    directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class CustomerGeoSearchComponent {
    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;
}