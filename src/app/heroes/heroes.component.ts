import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/api/heroes");
    response.subscribe((data)=>this.heroes = data);
  }

}
