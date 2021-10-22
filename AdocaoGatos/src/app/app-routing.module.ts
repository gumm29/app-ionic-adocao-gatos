import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'miaudote',
    pathMatch: 'full'
  },
  {
    path: 'formulario/:id',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'miaudote',
    loadChildren: () => import('./pages/miaudote/miaudote.module').then( m => m.MiaudotePageModule)
  },
  {
    path: 'doar',
    loadChildren: () => import('./pages/doar/doar.module').then( m => m.DoarPageModule)
  },
  {
    path: 'doacao-dinheiro',
    loadChildren: () => import('./pages/doacao-dinheiro/doacao-dinheiro.module').then( m => m.DoacaoDinheiroPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
