import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-doar',
  templateUrl: './doar.page.html',
  styleUrls: ['./doar.page.scss'],
})
export class DoarPage implements OnInit, OnDestroy{
  nome = 'Doar'
  opcao = false

  constructor(
    public nav: NavController,
  ) { this.opcao = false }

  ngOnInit() {
    if(this.opcao == true) this.opcao = false
    this.opcao = false
  }

  ngOnDestroy(){
    this.opcao = true
  }

  adotar(){
    this.opcao = true
    this.nav.navigateForward('home')
  }
}
