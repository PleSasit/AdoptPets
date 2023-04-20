import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = ""
  email: string = ""
  phone: string = ""
  message: string = ""
  constructor(private data1:PetService, private routedata:ActivatedRoute){

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  send(){
    this.data1.createContact({
      name:this.name,
      email:this.email,
      phone:this.phone,
      message:this.message}).subscribe(data => {
        console.log(data)
        this.alert();
      });
  }
}
