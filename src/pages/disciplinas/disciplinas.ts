import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import {Disciplina } from '../disciplina/disciplina'


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
  public disciplinas:Array<string> ;
 
  public curso:any;
  public cidade: any;
  private _url:string = 'https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/cidades/';

  
  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public _alertCtrl: AlertController,
            public _loadingController: LoadingController,
            public _http:Http) {
        
        this.curso = this.navParams.get('curso')
        this.cidade = this.navParams.get('cidade')


        let loader = this._loadingController.create({
            content: "Carregando lista de Disciplinas. Aguarde...",
         });
        this._url += this.cidade.id + "/cursos/" + this.curso.id + '/disciplina';
        loader.present();
        this._http
        .get(this._url)
        .map(res => res.json())
        .toPromise()
        .then(result => {
            this.disciplinas = result.Items
            loader.dismiss();
        },err =>{
            console.log(err);
            loader.dismiss();
            let alert = this._alertCtrl.create({
            title: "Ops, Algo de errado aconteceu!",
            subTitle: "Bad, bad server. No Donnuts for you!",
            buttons: [{ text: 'OK'}]
            });
            alert.present()

            }
        )

    }

  itemSelected(disciplina){
    this.navCtrl.push(Disciplina,{
      disciplina:disciplina
    });
    
  }
  addToFavoritos(disciplina){
      let alert = this._alertCtrl.create({
      title: 'Disciplina adicionada!',
      subTitle: 'Disciplina adicionada com sucesso à suas favoritas!',
      buttons: ['OK']
    });
    alert.present();
  
  }
 

}

