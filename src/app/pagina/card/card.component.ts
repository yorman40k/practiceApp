import { Component } from '@angular/core';
import { RickmortyserviceService } from 'src/app/pagina/service/rickmortyservice.service'
import { Router } from '@angular/router'
import { Personajes, Result } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  termino: string = '';

  control : boolean = false;

  cards : Result[] = [];

  constructor( private _rickService: RickmortyserviceService, private router: Router ) { }

  buscar() {
    this.control  = false;
  
     console.log(this.termino);

     this._rickService.buscarPersonaje( this.termino )
      .subscribe( (resp) => {
        this.cards = resp.results;
      }, (err) => {
        this.control = true;
      })
  }
}
