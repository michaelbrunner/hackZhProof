import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Customer } from './customer';
import { CustomerService } from "./customer.service";

@Component({
    selector: 'customer-search',
    templateUrl: 'app/customer-search.component.html',
    styleUrls: ['app/customer-search.component.css'],
    directives: [NgIf]
})
export class CustomerSearchComponent {
    customers: Customer[];
    error: any;
    searchParam: string;

    constructor(private router: Router, private customerService: CustomerService) { };

    search() {
        this.customerService.searchCustomerByName(this.searchParam).subscribe(customers => this.customers= customers);
        console.log(this.customers);
    }

    gotoDetail(customer: Customer) {
        let link = ['/favorites', customer.id];
        this.router.navigate(link);
    }
}





