import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Pet } from '../../../assets/data/petstructor';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-pets-profile',
  templateUrl: './pets-profile.component.html',
  styleUrls: ['./pets-profile.component.css'],
})
export class PetsProfileComponent {
  id = '';
  dataPet:any = {};

  constructor(private datanew: PetService, private routedata : ActivatedRoute ,private route:Router) {}

  ngOnInit() {
    console.log()
    const pet = this.route.url.toString().split("/")[1].slice(0,-1)
    const pathPet = pet.charAt(0).toUpperCase() + pet.slice(1);
    this.id = this.routedata.snapshot.paramMap.get('id') || '-1';
    console.log(this.id);
    console.log('/' + this.id);
    this.datanew.getOne({path:pathPet,id:this.id}).subscribe((data) => {
      this.dataPet = data;
      console.log(this.dataPet);
    });
  }
}
