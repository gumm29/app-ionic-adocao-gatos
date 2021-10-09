import gatos from '../db/data.js'

export interface IGato{
  id: Number
  arquivo:String
  nome:String
  descricao:String
  adotado:boolean
}

export default class Gato{
  gato: IGato
  gatosBanco = gatos

  constructor(novoGato: any){
    this.gatosBanco.push(novoGato)
    console.log(this.gatosBanco)
  }
}
