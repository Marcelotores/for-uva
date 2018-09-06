import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { DateFunctionsProvider } from '../../providers/date-functions/date-functions';


@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {
  user: number;
  notas: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider: UserProvider,
    public datefuncionsProvider: DateFunctionsProvider
  ) {
    this.user = userProvider.user;
    //var data = '2018-08-17 23:23:49';
    //console.log(datefuncionsProvider.formatarData(data));
  }

  getNotaAluno() {
    this.userProvider.getNotaByAluno(this.user)
      .subscribe((resp) => {
        this.notas = resp.json();
      });
  }

  ionViewDidLoad() {
    this.getNotaAluno();
  }


  



}
