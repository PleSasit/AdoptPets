import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
    cardH: String = ""
    cardNum: String = ""
    exp: String = ""
    cvv: String = ""
    money: String  = ""

    constructor(private data3:PetService, private routedata:ActivatedRoute){

    }
    alert() {
      window.alert('Thank you for donation');
    }
    donate(){
      this.data3.createDonate({
        cardH:this.cardH,
        cardNum:this.cardNum,
        exp:this.exp,
        money:this.money,
        cvv:this.cvv}).subscribe(data => {
          console.log(data)
          this.alert();
        });
    }
}
