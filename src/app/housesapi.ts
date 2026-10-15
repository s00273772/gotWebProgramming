import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { House } from './models/interface';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Housesapi {
  public houses = signal<House[]>([]);
  
    public house = signal<House | null>(null);

    public apiError = signal<boolean>(false);
  
    private _apiUrl = "https://anapioficeandfire.com/api/houses";

    private _http = inject(HttpClient);


    getHouse(houseName:string) {
      const url = this._apiUrl + "/?name=" + houseName;
      console.log(url);
      
      this._http.get<House[]>(url)
      .subscribe({
        next: (data) => {
          this.houses.set(data);
        },
        error: (data) =>{
          this.apiError.set(true);
        }
        });
    }
    
    getHouseDetails(houseUrl:string){
      const url = houseUrl;
      console.log(url);

      this._http.get<House>(url)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.house.set(data);
        },
        error: (data) =>{
          this.apiError.set(true);
        }
      });
  }
}
