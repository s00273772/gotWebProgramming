import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Charactersapi } from '../../charactersapi';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listcharacters',
  imports: [RouterLink],
  templateUrl: './listcharacters.html',
  styleUrl: './listcharacters.css',
})
export class Listcharacters {
  characterService = inject(Charactersapi);

  protected nextPage(){
    this.characterService.nextPage();
  }

  protected previousPage(){
    this.characterService.previousPage();
  }
}
