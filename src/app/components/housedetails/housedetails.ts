import { Component, input } from '@angular/core';
import { inject } from '@angular/core';
import { Housesapi } from '../../housesapi';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-housedetails',
  imports: [FormsModule],
  templateUrl: './housedetails.html',
  styleUrl: './housedetails.css',
})
export class Housedetails {
  houseService = inject(Housesapi);

  protected url = input.required<string>();

  ngOnInit(){
    let houseUrl=this.url();
    console.log(houseUrl);
    this.houseService.getHouseDetails(houseUrl);
  }

}
