import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disciplina page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class Disciplina {
  public disciplina:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disciplina = this.navParams.get('disciplina')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disciplina');
  }

}
