import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cidades } from './Cidades';

@NgModule({
  declarations: [
    Cidades,
  ],
  imports: [
    IonicPageModule.forChild(Cidades),
  ],
  exports: [
    Cidades
  ]
})
export class CidadesModule {}
