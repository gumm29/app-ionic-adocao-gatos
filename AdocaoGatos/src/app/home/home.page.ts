import { Component, OnInit, OnDestroy} from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import gatos from '../db/data.js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  nome = 'Adotar'
  opcao = true
  gatos = gatos

  constructor(
    public nav: NavController,
    public alert: AlertController,
  ) {
    this.opcao = true
  }

  ngOnInit(){
    console.log(this.gatos)
    if(this.opcao == true) this.opcao = false
    this.opcao = true
  }

  ngOnDestroy(){
    console.log('destruir')
    this.opcao = false
  }

  abrirPagina(id){
    this.nav.navigateForward(`formulario/${id}`)
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

  doar(){
    console.log(this.opcao)
    this.opcao = false
    console.log(this.opcao)
    this.nav.navigateForward('doar')
  }
}
