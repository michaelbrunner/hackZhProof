import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Favorite } from './favorite';
import { FavoriteItemComponent } from './favorite-item.component';
import { FavoriteService } from "./favorite.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'favorite-list',
    templateUrl: 'app/favorite-list.component.html',
    directives: [FavoriteItemComponent, NgFor]
})
export class FavoriteListComponent implements OnInit{
    favorites: Array<Favorite>;

    constructor(private route: ActivatedRoute, private favoriteService: FavoriteService) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id']; // (+) converts string 'id' to a number
            if (id) {
                this.favoriteService.getFavorites(id).subscribe(favorites => this.favorites = favorites, error => this.favorites = undefined);
            }

        });



        console.log(this.favorites);
    }


}