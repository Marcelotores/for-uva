import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaProvider } from '../../providers/disciplina/disciplina';
import { Disciplina } from '../../models/Disciplina';
import { QuestaoPage } from '../questao/questao';
import { OpQuestaoPage } from '../op-questao/op-questao';
import { NotaPage } from '../nota/nota';


@IonicPage()
@Component({
  selector: 'page-disciplinas',
  templateUrl: 'disciplinas.html',
})
export class DisciplinasPage {

  disciplinas: Disciplina;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private disicplinaProvider: DisciplinaProvider
  ) {
  }

  ionViewDidLoad() {
    this.getAll();
  }

  getAll(): void {
    this.disicplinaProvider.getAllDisciplinas()
      .subscribe((resp: any) => this.disciplinas = resp.json());
  }


  openDisciplina(id: number): void {
    this.navCtrl.push(OpQuestaoPage, {id: id});
  }

  onNota() {
    this.navCtrl.push(NotaPage);
  }

}
