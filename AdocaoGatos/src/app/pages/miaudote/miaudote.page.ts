import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-miaudote',
  templateUrl: './miaudote.page.html',
  styleUrls: ['./miaudote.page.scss'],
})
export class MiaudotePage {

  constructor(
    public nav: NavController,
  ) {}

  iniciar(){
    this.nav.navigateForward('home');
  }
}
