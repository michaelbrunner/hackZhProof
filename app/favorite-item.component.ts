import { Component } from '@angular/core';
import { Favorite } from './favorite';

@Component({
    selector: 'favorite-item',
    inputs: ['favorite'],
    templateUrl: 'app/favorite-item.component.html',
})
export class FavoriteItemComponent {
    favorite: Favorite;
    constructor() {

    }

}