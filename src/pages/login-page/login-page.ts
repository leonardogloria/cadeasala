import { Component } from '@angular/core';
import {AlertController,Loading,LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../providers/auth-service';
import {HomePage} from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};
  constructor(private auth:AuthService,private alertCtrl: AlertController, private loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage)
        });
      } else {

        this.showError("Access Denied");
      }
    },
    error => {
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    this.loading.present();
  }
  showError(text){
    setTimeout(() => {
      this.loading.dismiss()
    });
    let alert = this.alertCtrl.create({
      title : 'Falha no login',
      subTitle: text,
      buttons:[ 'OK' ]
    });
    alert.present(prompt);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
