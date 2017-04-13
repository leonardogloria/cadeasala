import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the Disciplinas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class Disciplinas {
  public disciplinas:Array<string> = [
    'Banco de Dados',
    'Estrutura de Dados'
  ]
  public curso:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
        this.curso = this.navParams.get('curso')
    }

  itemSelected(disciplina){
    alert(disciplina)
  }
  addToFavoritos(disciplina){
      let alert = this.alertCtrl.create({
      title: 'Disciplina adicionada!',
      subTitle: 'Disciplina adicionada com sucesso à suas favoritas!',
      buttons: ['OK']
    });
    alert.present();
  
  }
 

}

