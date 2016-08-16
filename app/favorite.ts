export class Favorite {
    category:string;
    title:string;
    brand:string;
    price:{
        value:number;
        currency:string
    };
    currentPrice:{
        value:number;
        currency:string;
        date:string;
    };
    purchaseDate:string;
}
