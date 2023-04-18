import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Pet } from '../../../assets/data/petstructor';

@Component({
  selector: 'app-cat',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent {
  datacat:Pet[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetCats().subscribe((data)=>{
      this.datacat = data
    })
  }
}
