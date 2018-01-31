import { Injectable } from '@angular/core';
import { Customer } from './domain/customer';
import { CUSTOMERS } from './mock-customers';

@Injectable()
export class DataService {

  constructor() { }

  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }

}
