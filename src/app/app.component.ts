import { Component } from '@angular/core';
import { LoanService} from './loan.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'credit';
  constructor (
    private loanService: LoanService

  ){
  this.loanService.getLoanDetails();
  }
  public data(){
  
  }


}
