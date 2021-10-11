import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoacaoDinheiroPageRoutingModule } from './doacao-dinheiro-routing.module';

import { DoacaoDinheiroPage } from './doacao-dinheiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoacaoDinheiroPageRoutingModule
  ],
  declarations: [DoacaoDinheiroPage]
})
export class DoacaoDinheiroPageModule {}
