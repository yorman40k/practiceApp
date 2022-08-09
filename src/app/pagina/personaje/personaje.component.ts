import { Component, OnInit } from '@angular/core';
import { RickmortyserviceService } from 'src/app/pagina/service/rickmortyservice.service';
import { Router } from '@angular/router'
import { Personajes, Result } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personajes: Result[] = [];

  control : boolean = false;

  constructor( private _rickService: RickmortyserviceService, private router: Router ) { }

  ngOnInit(): void {

    this._rickService.getApi().subscribe( data => {
      this.personajes = data.results;
      console.debug();
      console.log(this.personajes);
    })

  }

}
