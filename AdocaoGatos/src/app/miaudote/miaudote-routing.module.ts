import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiaudotePage } from './miaudote.page';

const routes: Routes = [
  {
    path: '',
    component: MiaudotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiaudotePageRoutingModule {}
