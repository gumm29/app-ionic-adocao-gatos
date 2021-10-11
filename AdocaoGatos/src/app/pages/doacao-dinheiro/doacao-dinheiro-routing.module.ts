import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoacaoDinheiroPage } from './doacao-dinheiro.page';

const routes: Routes = [
  {
    path: '',
    component: DoacaoDinheiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoacaoDinheiroPageRoutingModule {}
