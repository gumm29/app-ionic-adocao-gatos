import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import gatos from '../../db/data.js'
import { NavController } from '@ionic/angular';
import { DbService } from '../../services/db.service'
import { IGato } from '../../model/gato'
import Api from '../../util/api'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  id: String
  numero: number = 0
  nome: String = ''
  arquivo: String = ''
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
    let api = new Api()
    console.log(api.buscaId(this.id))
  }

  apenasNumero = (numero) => { if(!numero.key.match('[0-9]')) return false }

  apenasLetra = (letra) => { if(letra.key.match('[0-9]')) return false }

  edita(){
    for(let gato of gatos){
      if(gato.id == this.numero){
        this.Igato.id = gato.id
        this.Igato.nome = gato.nome + this.nome
        this.Igato.descricao = gato.descricao + this.motivo
        this.Igato.nomeArquivo = this.arquivo
        this.banco.editar(this.Igato)
      }
    }
    this.nav.navigateForward('home')
  }

  deletar(id){
    this.banco.deletar(id)
    this.nav.navigateForward('home')
  }

  uploadFoto(event){
    let teste = <File>event.srcElement.files[0]
    console.log(teste)
    let img = new FileReader()
    img.readAsDataURL(teste)
    img.onload = () => this.arquivo = `${img.result}`
  }

  doacaoDinheiro(){
    this.nav.navigateForward('doacao-dinheiro')
  }
}
