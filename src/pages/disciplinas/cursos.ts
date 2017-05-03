import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import {Disciplinas} from './disciplinas';
import {Http} from '@angular/http';


/**
 * Generated class for the Disciplinas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class Cursos {
    
    public cursos;
    private _url:string = 'https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/cidades/';
    public cidade:any;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private _http:Http, 
                private _loadingController: LoadingController,
                private _alertController: AlertController) {
        
        this.cidade = this.navParams.get('cidade');
        let loader = this._loadingController.create({
            content: "Carregando lista de cursos. Aguarde.",
         });
        loader.present();
        this._http
        .get(this._url + this.cidade.id + "/cursos")
        .map(res => res.json())
        .toPromise()
        .then(result => {
            this.cursos = result.Items
            loader.dismiss();
        },err =>{
            console.log(err);
            loader.dismiss();
            let alert = this._alertController.create({
            title: "Ops, Algo de errado aconteceu!",
            subTitle: "Bad, bad server. No Donnuts for you!",
            buttons: [{ text: 'OK'}]
            });
            alert.present()

            }
        )


    }
    itemSelected(curso){
        this.navCtrl.push(Disciplinas,{
        curso:curso,
        cidade:this.cidade
     })
    }
  

}

