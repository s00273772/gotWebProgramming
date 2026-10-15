import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Charactersapi } from '../../charactersapi';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  protected name: string="";
  protected gender: string = "";
  protected culture: string = "";
  protected opt: string = "";

  options = ['name', 'gender', 'culture'];
  characterService = inject(Charactersapi);
  

  protected get(name: string, opt: string){
    this.characterService.getCharacter(this.name, this.opt);
    this.name='';
  }

  protected resetPageNumber(){
    this.characterService.resetPageNumber();
  }

}
