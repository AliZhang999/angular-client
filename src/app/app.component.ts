import { Component } from '@angular/core';
import { Customer } from './domain/customer';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'app works';
  customers: Customer[];
  selectedCustomer: Customer;

  constructor (private dataServie: DataService) {}

  getCustomers () {
    return this.dataServie.getCustomers().then(customers => {
      this.customers = customers;
    });
  }

  ngOnInit () {
    this.getCustomers();
  }

  onSelect (cus: Customer) {
    this.selectedCustomer = cus;
  }

}
