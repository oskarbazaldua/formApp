import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//se crean el acceso a las rutas con su respectivo pat y su redireccionador a la página
const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    //pagina comodín, en caso de no entrar a ninguna de las páginas anteriores
    //redirecciona a reactive
    path: '**',
    redirectTo: 'reactive',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
