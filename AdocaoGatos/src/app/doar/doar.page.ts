import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import gatos from '../db/data.js'
import Gato, {IGato} from '../model/gato'
import { validacao } from '../util/validacao'

@Component({
  selector: 'app-doar',
  templateUrl: './doar.page.html',
  styleUrls: ['./doar.page.scss'],
})
export class DoarPage implements OnInit, OnDestroy{
  tipo: String = 'Doar'
  opcao: boolean = false
  nome: String = ''
  endereco: String = ''
  celular: String = ''
  nomeGato: String = ''
  idadeGato: String = ''
  motivo: String = ''
  personalidadeGato: String = ''
  gatos = gatos
  indice: Number
  novoGato: Gato
  teste = false
  Igato: IGato = {
    id: 0,
    arquivo: 'teste',
    nome: '',
    descricao: '',
    adotado: false
  }

  constructor(
    public nav: NavController,
    public alert: AlertController
  ) { 
    this.opcao = false
    this.indice = this.gatos.length
  }

  ngOnInit() {
    if(this.opcao == true) this.opcao = false
    this.opcao = false
    this.teste = false
  }

  ngOnDestroy(){
    this.opcao = true
  }

  adotar(){
    this.opcao = true
    this.nav.navigateForward('home')
  }

  async cadastrarGato(){
    let form = {'nome':this.nome, 'endereco':this.endereco, 'celular':this.celular, 'nomeGato': this.nomeGato,
    'idadeGato': this.idadeGato, 'motivo': this.motivo, 'personalidadeGato': this.personalidadeGato}
    if(await validacao(form, this.alert)){
      this.Igato.id = this.gatos.length + 1
      this.Igato.nome = this.nomeGato
      this.Igato.descricao = this.personalidadeGato
      this.novoGato = new Gato(this.Igato)
      this.teste = false
      this.adotar()
    }
  }
}
