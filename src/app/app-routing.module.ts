import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pagina/principal/principal.component';
import { PersonajeComponent } from './pagina/personaje/personaje.component';
import { CardComponent } from './pagina/card/card.component';

const routes : Routes = [
    {
        path: '',
        component: PrincipalComponent,
        pathMatch: 'full'
    },
    {
        path: 'personaje',
        component: PersonajeComponent
    },
    {
        path: 'card',
        component: CardComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })

  export class AppRoutingModule { }