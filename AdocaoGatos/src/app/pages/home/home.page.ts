import { Component, OnInit, OnDestroy} from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../services/db.service'
import { IGato } from '../../model/gato'
import Api from '../../util/api'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  nome = 'Adotar'
  opcao = true
  gatos: IGato[] = []
  banco: DbService

  constructor(
    public nav: NavController,
    public alert: AlertController,
    bd: DbService
  ) {
    this.opcao = true
    this.banco = bd
    this.gatos = this.banco.gatosBanco

    let api = new Api()
    api.busca().then(res => {
      if(res.length == this.gatos.length){
        console.log('bancos iguais') // logica para atualizar banco desatualizado
      }
    })
  }

  ngOnInit(){
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

  editar(id){
    this.nav.navigateForward(`editar/${id}`)
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

  doacaoDinheiro(){
    this.nav.navigateForward('doacao-dinheiro')
  }
}
