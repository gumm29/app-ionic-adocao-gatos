import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

public id: String
public numero: number

  gatos = [
    {id: 1, arquivo:'foto-gatinho', nome:'Dorinha', descricao:'sou um gato dorminhão'},
    {id: 2, arquivo:'oreo', nome:'Oreo', descricao:'sou um gato comilao'}
  ]

  constructor(public alert: AlertController, private route: ActivatedRoute) {}
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
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.numero = Number(this.id)
  }
}
