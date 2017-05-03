import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



declare const AWS: any;
declare const AWSCognito: any;

  
export enum UserState {
  SignedOut = 0,
  SignedIn = 1,
  PendingConfirmation = 2,
  InvalidCredentials = 3
}

@Injectable()
export class RegiterService {

  constructor(public http: Http) {
    console.log('Hello RegiterService Provider');
  }
  public static setUserState(userState: UserState) {
  }


  

    

}
