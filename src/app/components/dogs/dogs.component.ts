import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Pet } from '../../../assets/data/petstructor';

@Component({
  selector: 'app-dog',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  datadog:Pet[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetDogs().subscribe((data)=>{
      this.datadog = data
    })
  }
}
