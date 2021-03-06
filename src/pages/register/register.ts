import { Component } from '@angular/core';
import {RegisterService} from '../../providers/register-service';
import {_POOL_DATA} from '../../config/config';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  registerCredentials = {email: '', password: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
