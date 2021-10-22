import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import gatos from '../../db/data.js'
import { validacao } from '../../util/validacao'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit, OnDestroy {

  id: String
  numero: number = 0
  nome: String = ''
  endereco: String = ''
  celular: String = ''
  gatos = gatos
  teste = false

  constructor(
    public alert: AlertController,
    private route: ActivatedRoute,
    public nav: NavController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.numero = Number(this.id)
    this.teste = true
  }

  ngOnDestroy(){
    this.teste = true
  }

  apenasNumero = (numero) => { if(!numero.key.match('[0-9]')) return false }

  apenasLetra = (letra) => { if(letra.key.match('[0-9]')) return false }

  async abrirPopup(){
    let form = {'nome':this.nome, 'endereco':this.endereco, 'celular':this.celular}
    if(await validacao(form, this.alert)){
      this.modalAdocao()
      gatos[this.numero -1]['adotado'] = true
      this.nav.navigateForward('home')
    }
  }

  async modalAdocao(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Obrigada!',
      subHeader: 'Seu gatinho vai adorar te conhecer!',
      message: 'Entraremos em contato dentro de 2 dias úteis :)',
      buttons: ['OK']
    });
    await alert.present();
    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }
}
