import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Housesapi } from '../../housesapi';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listhouses',
  imports: [RouterLink],
  templateUrl: './listhouses.html',
  styleUrl: './listhouses.css',
})
export class Listhouses {
  houseService =inject(Housesapi);
}
