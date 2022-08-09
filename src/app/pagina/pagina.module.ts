import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { PersonajeComponent } from './personaje/personaje.component';
import { PrincipalComponent } from './principal/principal.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    PersonajeComponent,
    PrincipalComponent,
    CardComponent
  ],
  exports: [
    PersonajeComponent,
    PrincipalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PaginaModule { }
