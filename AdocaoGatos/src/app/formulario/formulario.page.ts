import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import gatos from '../db/data.js'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

public id: String
public numero: number = 0

  gatos = gatos

  constructor(public alert: AlertController,
    private route: ActivatedRoute,
    public nav: NavController
  ) {}

  async abrirPopup(){
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Obrigada!',
      subHeader: 'Seu gatinho vai adorar te conhecer!',
      message: 'Entraremos em contato dentro de 2 dias úteis :)',
      buttons: ['OK']
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    gatos[this.numero -1]['adotado'] = true
    console.log(this.numero)
    console.log(gatos[this.numero-1]['adotado'])
    this.nav.navigateForward(`home`)
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.numero = Number(this.id)
  }
}
