import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import gatos from '../../db/data.js'
import { IGato } from '../../model/gato'
import { validacao } from '../../util/validacao'
import { Sanitizer } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DbService } from '../../services/db.service'

@Component({
  selector: 'app-doar',
  templateUrl: './doar.page.html',
  styleUrls: ['./doar.page.scss'],
})
export class DoarPage implements OnInit, OnDestroy{
  sanitizer: DomSanitizer
  foto: SafeResourceUrl
  tipo: String = 'Doar'
  opcao: boolean = false
  nome: String = ''
  endereco: String = ''
  celular: String = ''
  nomeGato: String = ''
  idadeGato: String = ''
  motivo: String = ''
  arquivo: String = ''
  personalidadeGato: String = ''
  gatos = gatos
  indice: Number
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

  constructor(
    public sanit: DomSanitizer,
    public nav: NavController,
    public alert: AlertController,
    public bd: DbService
  ) { 
    this.opcao = false
    this.indice = this.gatos.length
    this.banco = bd
    console.log(this.banco)
  }

  ngOnInit() {
    if(this.opcao == true) this.opcao = false
    this.opcao = false
    this.teste = false
  }

  ngOnDestroy(){
    this.opcao = true
  }
  
  apenasNumero = (numero) => { if(!numero.key.match('[0-9]')) return false }

  apenasLetra = (letra) => { if(letra.key.match('[0-9]')) return false }

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
      this.Igato.nomeArquivo = this.arquivo
      this.banco.salvar(this.Igato)
      this.teste = false
      this.adotar()
    }
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

  async fotografar(){
    const imagem = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      allowEditing: false,
    })

    const imagemUrl = imagem.webPath;
    this.foto = this.sanitizer.bypassSecurityTrustResourceUrl(imagemUrl)
  }
}
