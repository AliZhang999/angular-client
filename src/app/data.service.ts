import { Injectable } from '@angular/core';
import { Customer } from './domain/customer';
import { CUSTOMERS } from './mock-customers';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private customersUrl: string = 'api/customer';

  constructor(private http: Http) { }

  getCustomers(): Promise<Customer[]> {
    // 由原来的从mock-customers.ts中取数据，改为通过http到后端springboot项目中取数据
    // return Promise.resolve(CUSTOMERS);
    return this.http.get(this.customersUrl)
    .toPromise()
    .then(response => response.json() as Customer[])
    .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
    console.error('Error',error);
    return Promise.reject(error.message || error);
  }

}
