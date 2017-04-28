import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage}  from '../pages/login-page/login-page';
import {Register} from '../pages/register/register';
import {AuthService} from '../providers/auth-service';
import {CidadeService} from '../providers/cidade-service'
import {Disciplina} from '../pages/disciplina/disciplina';
import {Tabs } from '../pages/tabs/tabs';
import {Configuracoes} from '../pages/configuracoes/configuracoes'
import {Disciplinas} from '../pages/disciplinas/disciplinas';
import {Cidades} from '../pages/disciplinas/cidades';
import {Cursos} from '../pages/disciplinas/cursos';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Disciplina,
    Tabs,
    Configuracoes,
    Disciplinas,Cidades,Cursos
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Disciplina,
    Tabs,
    Configuracoes,
    Disciplinas, Cidades, Cursos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CidadeService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
