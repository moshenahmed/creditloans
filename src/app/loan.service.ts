import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private url = 'http://localhost:65078/api/values'

  constructor(private http: HttpClient) { 
    console.log(this.getLoanDetails());
  }
      public getLoanDetails(){
        return this.http.get(this.url).pipe(x => x).subscribe();   
        
      }
}
