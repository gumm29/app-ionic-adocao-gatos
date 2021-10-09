import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'miaudote',
    pathMatch: 'full'
  },
  {
    path: 'formulario/:id',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'miaudote',
    loadChildren: () => import('./miaudote/miaudote.module').then( m => m.MiaudotePageModule)
  },
  {
    path: 'doar',
    loadChildren: () => import('./doar/doar.module').then( m => m.DoarPageModule)
  },
  {
    path: 'doacao-dinheiro',
    loadChildren: () => import('./doacao-dinheiro/doacao-dinheiro.module').then( m => m.DoacaoDinheiroPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
