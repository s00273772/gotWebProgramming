import { Component } from '@angular/core';
import { Listcharacters } from '../listcharacters/listcharacters';
import { Listhouses } from '../listhouses/listhouses';
import { Search } from '../search/search';
import { Searchhouse } from '../searchhouse/searchhouse';

@Component({
  selector: 'app-home',
  imports: [Listcharacters, Listhouses, Search, Searchhouse],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
