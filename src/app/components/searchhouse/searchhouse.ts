import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Housesapi } from '../../housesapi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchhouse',
  imports: [FormsModule],
  templateUrl: './searchhouse.html',
  styleUrl: './searchhouse.css',
})
export class Searchhouse {
  protected house: string = "";

  houseService = inject(Housesapi);

  selectedHouse: string= 'Nothing';

  protected getHouse(house:string){
    this.houseService.getHouse(this.selectedHouse);
    this.house='';

  }
}
