import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UnitTestService {
  parser = new DOMParser();
  private url = 'http://localhost:8080/utTests'
  private headers = new Headers({'Content-Type': 'application/json'});
  public tempUTs = [{name: "temp", objectCall: "calling temp", objectOwner: "CDB_OWNER",_links:{utTest:{href: "temp"}}}
  , {name: "temp2", objectCall: "calling temp2", objectOwner: "CDB_OWNERx", _links:{utTest:{href: "temp2"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp4", objectCall: "calling temp4", objectOwner: "CDB_OWNERz", _links:{utTest:{href: "temp4"}}}

  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  , {name: "temp3", objectCall: "calling temp3", objectOwner: "CDB_OWNERy", _links:{utTest:{href: "temp3"}}}
  ]

  constructor(private http: Http) { }

  getUnitTests(): Promise<any> {
    // return new Promise<any> ((resolve, reject) => resolve(this.tempUTs))
    return this.http.get(this.url)
            .toPromise()
            .then(response => response.json()._embedded.utTests as any[])
            .catch(this.handleError);
  }

  getUnitTest(url: string) : Promise<any>{
    // console.log(url)
    // return new Promise<any> ((resolve, reject) => {resolve(this.tempUTs.find(o => o.name === url))});  
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as any[] )
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getXmlFromString(xmlString: string) : Document{
    return this.parser.parseFromString(xmlString,"text/xml");
  }
} 