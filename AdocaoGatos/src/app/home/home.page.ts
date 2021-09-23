import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome = 'Doar'
  opcao = false

  constructor(public nav: NavController) {}

  abrirPagina(){
    this.nav.navigateForward('formulario');

  }

  togle(){
    this.nome = (this.opcao == true) ? 'Doar' : 'Adotar'
  }

}
