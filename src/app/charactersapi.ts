import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Character } from './models/interface';
import { take } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Charactersapi {
  public characters = signal<Character[]>([]);
  public dbCharacters = signal<Character[]>([]);

  public apiError = signal<boolean>(false);
  public databaseError = signal<boolean>(false);

  public character = signal<Character | null>(null);

  public currentCharacter = ""; 
  public currentGender = "";
  public currentCulture = ""
  public searchParameter = "";
  public searchTerm = "";
  public option = "";

  private _apiUrl = "https://anapioficeandfire.com/api/characters";
  private _http = inject(HttpClient);
  //private _databaseUrl = "http://localhost:5050/got";
  private _databaseUrl = environment.apiUrl;

  public pageNumber = 0;
  public minPages = signal<number>(1);
  public maxPages = signal<number>(0);
  public currentPage = signal<number>(1);

  // return all characters
  getCharacter(name:string, opt:string) {
    this.searchTerm = name;
    this.option = opt;
    this.searchParameter = "&" + this.option + "=";
    var url = this._apiUrl + "?page=" + this.currentPage() + "&pageSize=10" + this.searchParameter + name;
    console.log(url);
    if (name === ""){
      url = this._apiUrl +"?page=" + this.currentPage() + "&pageSize=10";
    }

    this._http.get<Character[]>(url)
    .pipe(take(1))
    .subscribe({
      next: (data) => {
      this.characters.set(data);
      console.log(this.characters());
      this.currentCharacter = name;
      },
      error: (data) =>{
        this.apiError.set(true);
      }
    });
  }

  //Reset the page number whenever search is clicked
  resetPageNumber(){
    this.currentPage.set(1);
  }

  getCharacterDetails(characterUrl:string){
    const url = characterUrl;
    console.log(url);

    this._http.get<Character>(characterUrl)
    .pipe(take(1))
    .subscribe({
      next: (data) => {
        this.character.set(data);
      },
      error: (data) =>{
        this.apiError.set(true);
      }
    });
  }

nextPage(){
     //only allow the page to be changed if more than one character is returned
     if (!(this.option == "name" && this.searchTerm != "")){
      if(this.currentPage()>= this.minPages()){
          this.pageNumber = this.currentPage();
          this.currentPage.set(this.pageNumber + 1);
          this.getCharacter(this.currentCharacter, this.option);
          document.documentElement.scrollTop = 0;
         }
     }
  }

  previousPage(){
    //only allow the page to be changed if more than one character is returned
     if (!(this.option == "name" && this.searchTerm != "")){
        if (this.currentPage() > this.minPages()){
          this.pageNumber = this.currentPage();
          this.currentPage.set(this.pageNumber - 1);
          this.getCharacter(this.currentCharacter, this.option);
          document.documentElement.scrollTop = 0;
        }
      }
  }

  getItems(){
    const url = this._databaseUrl;
    this._http.get<Character[]>(url)
      .subscribe({
        next: (data) => {
          this.dbCharacters.set(data);
        },
        error: (data) =>{
          this.databaseError.set(true);
        }
      });
  }

  addItem(myName: string, myTitles:string, myAliases:string, myGender:string, myCulture:string, myBorn:string, myPlayedBy:string, myTvSeries:string, myPersonalNote:string){
    const url = this._databaseUrl;
    let character = {name:myName, titles:myTitles, aliases:myAliases, gender:myGender, culture:myCulture, born:myBorn, playedBy:myPlayedBy, tvSeries:myTvSeries, note:myPersonalNote}
    this._http.post<Character[]>(url, character)
    .subscribe(data =>{
      this.getItems();
    });
    document.documentElement.scrollTop = 0;
    window.alert("Details saved");
  }

  deleteItem(myId:string){
    const url = this._databaseUrl + '/' + myId;
    this._http.delete(url)
    .subscribe(data => { 
      this.getItems();
    });
    document.documentElement.scrollTop = 0;
    window.alert("Details deleted");
  }

}
