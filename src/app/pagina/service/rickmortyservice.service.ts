import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickmortyserviceService {

  private api : string = 'https://rickandmortyapi.com/api/character';

  private apiBuscar : string = 'https://rickandmortyapi.com/api/character/?name=';


  constructor( private _http: HttpClient ) { }

  getApi() : Observable<any>{
    return this._http.get<any>(this.api) 
  }

  buscarPersonaje( termino : string ) : Observable<any> {
    const url = `${this.apiBuscar}${ termino }`;

    return this._http.get( url );
  }
}
