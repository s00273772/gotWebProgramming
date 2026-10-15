import { Component, input } from '@angular/core';
import { inject } from '@angular/core';
import { Charactersapi } from '../../charactersapi';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-characterdetails',
  imports: [FormsModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css',
})
export class Characterdetails {
  characterService = inject(Charactersapi);

  protected url = input.required<string>();

  ngOnInit(){
    let characterUrl=this.url();
    console.log("url is:" + characterUrl);
    this.characterService.getCharacterDetails(characterUrl);
  }

  protected name:string =  "";
  protected titles:string = "";
  protected aliases:string = "";
  protected gender:string = "";
  protected culture:string = "";
  protected born:string = "";
  protected playedBy:string = "";
  protected tvSeries:string = "";
  protected personalNote:string = "";

  

  protected addItem(name: string, titles:string, aliases:string, gender:string, culture:string, born:string, playedBy: string, tvSeries: string, personalNote: string){
    this.characterService.addItem(name, titles, aliases, gender, culture, born, playedBy, tvSeries, personalNote)
  }

}
