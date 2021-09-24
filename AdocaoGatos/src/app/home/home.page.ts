import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome = 'Doar'
  opcao = false

  constructor(
    public nav: NavController,
    public alert: AlertController
  ) {}

  abrirPagina(){
    this.nav.navigateForward('formulario');
  }

  async popupSalvar(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Obrigada!',
      subHeader: 'Seu gatinho vai encontrar um lar cheio de amor!',
      message: 'Entraremos em contato dentro de 2 dias úteis :)',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  togle(){
    this.nome = (this.opcao == true) ? 'Doar' : 'Adotar'
  }
}
