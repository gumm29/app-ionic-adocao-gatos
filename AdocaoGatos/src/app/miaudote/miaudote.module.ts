import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiaudotePageRoutingModule } from './miaudote-routing.module';

import { MiaudotePage } from './miaudote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiaudotePageRoutingModule
  ],
  declarations: [MiaudotePage]
})
export class MiaudotePageModule {}
