import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisciplinasPage } from '../disciplinas/disciplinas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  onDisciplinas(): void {
    this.navCtrl.push(DisciplinasPage);
  }

}
