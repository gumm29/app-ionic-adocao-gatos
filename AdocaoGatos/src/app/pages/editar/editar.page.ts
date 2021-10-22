import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gatos from '../../db/data.js'
import { NavController } from '@ionic/angular';
import { DbService } from '../../services/db.service'
import { IGato } from '../../model/gato'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  id: String
  numero: number = 0
  nome: String = ''
  endereco: String = ''
  celular: String = ''
  nomeGato: String = ''
  idadeGato: String = ''
  motivo: String = ''
  gatos = gatos
  teste = false
  banco: DbService
  Igato: IGato = {
    id: 0,
    arquivo: 'teste',
    nome: '',
    descricao: '',
    adotado: false,
    nomeArquivo: ''
  }

  constructor(private route: ActivatedRoute,bd: DbService, public nav: NavController,) {
    this.banco = bd
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.numero = Number(this.id)
    this.teste = true
  }

  apenasNumero = (numero) => { if(!numero.key.match('[0-9]')) return false }

  apenasLetra = (letra) => { if(letra.key.match('[0-9]')) return false }

  edita(){
    for(let gato of gatos){
      if(gato.id == this.numero){
        this.Igato.id = gato.id
        this.Igato.nome = gato.nome + this.nome
        this.Igato.descricao = gato.descricao + this.motivo
        this.banco.editar(this.Igato)
      }
    }
    this.nav.navigateForward('home')
  }

  deletar(id){
    this.banco.deletar(id)
    this.nav.navigateForward('home')
  }
}
