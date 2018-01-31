import { Component } from '@angular/core';
import { Customer } from './domain/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works';
  customers: Customer[];
  selectedCustomer: Customer;

  constructor () {}

  getCustomers () {
    return [
      new Customer(1,'aa','AA',1),
      new Customer(2,'bb','BB',2),
      new Customer(3,'cc','CC',3),
      new Customer(4,'dd','DD',4)
    ];
  }

  ngOnInit () {
    this.customers = this.getCustomers();
  }

  onSelect (cus: Customer) {
    this.selectedCustomer = cus;
  }

}
