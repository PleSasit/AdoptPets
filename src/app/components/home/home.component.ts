import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Pet } from '../../../assets/data/petstructor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  datadog:Pet[] = [];
  datacat:Pet[] = [];
  dataOth:Pet[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetDogs().subscribe((data)=>{
      this.datadog = data
    })
    this.datanew.GetCats().subscribe((data)=>{
      this.datacat = data
    })
    this.datanew.GetOthers().subscribe((data)=>{
      this.dataOth = data
    })
  }

}
