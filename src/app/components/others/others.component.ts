import { Component } from '@angular/core';
import { PetService } from '../../service/pets.service';
import { Pet } from '../../../assets/data/petstructor';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent {
  dataOth:Pet[] = [];

  constructor(private datanew : PetService){}

  ngOnInit(){
    this.datanew.GetOthers().subscribe((data)=>{
      this.dataOth = data
    })
  }
}
