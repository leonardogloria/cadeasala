import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Disciplinas} from './disciplinas'

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
    
    public cursos:Array<string> = [
        'Geografia',
        'Pedagogia',
        'Análise de Sistemas'
    ]
    
    public cidade:string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.cidade = this.navParams.get('cidade')
    }
    itemSelected(curso){
        this.navCtrl.push(Disciplinas,{
        curso:curso
     })
    }
  

}

