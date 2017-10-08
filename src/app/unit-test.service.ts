import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UnitTestService {
  private url = 'http://localhost:8080/utTests'
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getUnitTests(): Promise<any> {
    return this.http.get(this.url)
            .toPromise()
            .then(response => response.json()._embedded.utTests as any[])
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
} 