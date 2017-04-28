import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Cursos} from './cursos';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-cidades',
  templateUrl: 'cidades.html',
})
export class Cidades {
  public cidades
  private url:string = 'https://ab9la9wbm9.execute-api.us-east-1.amazonaws.com/v1/cidades/'

  
  constructor(public navCtrl: NavController, 
          public navParams: NavParams, 
          private _http:Http, 
          private _loadingController: LoadingController,
          private _alertController: AlertController) {
   
   let loader = this._loadingController.create({
     content: "Carregando lista de cidades. Aguarde.",
   })
   
  loader.present();
   this._http
   .get(this.url)
   .map(res => res.json())
   .toPromise()
   .then(result => {
     this.cidades = result.Items
     console.log(this.cidades.id)
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
    itemSelected(cidade){
        this.navCtrl.push(Cursos,{
        cidade:cidade
    });
    
  }
  

}