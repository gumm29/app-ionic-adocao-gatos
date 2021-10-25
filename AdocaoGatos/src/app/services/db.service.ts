import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import gatos from '../db/data.js'
import { IGato } from '../model/gato'

@Injectable({
  providedIn: 'root'
})
export class DbService {
  storage: Storage
  gato: IGato
  gatosBanco: IGato[] = gatos

  constructor(storage: Storage){
    this.storage = storage
    this.storage.create().then(() => console.log('banco criado'))
    this.storage.get('gatos')
      .then(gatos => this.gatosBanco.push(...gatos))
      .catch(() => this.storage.set('gatos', this.gatosBanco))
  }

  salvar(gato: IGato){
    this.gatosBanco.push(gato)
    console.log('teste')
    this.storage.set('gatos', this.gatosBanco)
    console.log(this.storage.get('gatos'))
  }

  editar(gatoEditar){
    for(let gato of this.gatosBanco){
      if(gato.id == gatoEditar.id){
        gato.nome = gatoEditar.nome
        gato.descricao = gatoEditar.descricao
        gato.nomeArquivo = gatoEditar.nomeArquivo
      }
    }
    console.log(this.gatosBanco)
    this.storage.set('gatos', this.gatosBanco)
  }

  deletar(indice: number){
    this.gatosBanco.splice(indice -1, 1)
    console.log(this.gatosBanco)
    this.atualizarOrdem()
    this.storage.set('gatos', this.gatosBanco)
  }

  atualizarOrdem(){
    this.gatosBanco.forEach(gato => gato.id = this.gatosBanco.indexOf(gato) + 1)
  }
}
