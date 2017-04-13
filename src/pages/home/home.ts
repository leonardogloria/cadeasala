import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Disciplina } from '../disciplina/disciplina'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  
  public minhasDisciplinas:Array<string> = [
    'Banco de Dados',
    'Análise de Sistema'

  ]


  constructor(public navCtrl: NavController) {

  }
  itemSelected(disciplina){
    this.navCtrl.push(Disciplina,{
      disciplina:disciplina
    });
    
  }
  removeSelected(disciplina){
    let index = this.minhasDisciplinas.indexOf(disciplina)
    if(index > -1){
      this.minhasDisciplinas.splice(index, 1);
    }
  }


}
