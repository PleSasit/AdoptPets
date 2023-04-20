import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-adopt-form',
  templateUrl: './adopt-form.component.html',
  styleUrls: ['./adopt-form.component.css']
})
export class AdoptFormComponent {
  name: string = ""
  lname: string = ""
  email: string = ""
  phone: string = ""
  nationality:String = ""
  country:String = ""
  message: string = ""
  constructor(private data2:PetService, private routedata:ActivatedRoute){

  }
  alert() {
    window.alert('Your information has been saved and we will contact you shortly.');
  }
  submit(){
    this.data2.createAdoptionForm({
      name:this.name,
      lname:this.lname,
      email:this.email,
      phone:this.phone,
      nationality:this.nationality,
      country:this.country,
      message:this.message}).subscribe(data => {
        console.log(data)
        this.alert();
      });
  }
}
