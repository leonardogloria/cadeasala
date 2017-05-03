import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'


/**
 * Generated class for the Configuracoes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class Configuracoes {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _storage: Storage) {
      let item = this._storage.get('lsilva@credilink.com.br')
      .then((dado) => {
        console.log(dado)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Configuracoes');
  }

}
