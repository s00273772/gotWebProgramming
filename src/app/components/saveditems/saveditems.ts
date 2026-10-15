import { Component, input } from '@angular/core';
import { inject } from '@angular/core';
import { Charactersapi } from '../../charactersapi';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saveditems',
  imports: [RouterLink, FormsModule],
  templateUrl: './saveditems.html',
  styleUrl: './saveditems.css',
})
export class Saveditems {
  characterService = inject(Charactersapi);
  protected url = input.required<string>();
  protected id:string = "";

  constructor(){
    this.characterService.getItems();
  }

  protected deleteItem(id:string){
    this.characterService.deleteItem(id);
  }
}
