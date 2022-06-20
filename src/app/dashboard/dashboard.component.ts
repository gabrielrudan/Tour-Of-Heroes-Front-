import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/api/heroes");
    response.subscribe((data)=>this.heroes = data);
  }

  
}
