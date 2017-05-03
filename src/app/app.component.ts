import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {UserState} from '../providers/register-service'
import {Tabs} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login-page/login-page';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Tabs;
  //rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this._storage.set('lsilva@credilink.com.br',0);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

