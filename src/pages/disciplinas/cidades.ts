import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cursos} from './cursos';


@IonicPage()
@Component({
  selector: 'page-cidades',
  templateUrl: 'cidades.html',
})
export class Cidades {
  public cidades:Array<string> = [
    'Niterói',
    'Mangaratiba'
  ]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    itemSelected(cidade){
        this.navCtrl.push(Cursos,{
        cidade:cidade
    });
    
  }
  

}