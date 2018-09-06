import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaProvider } from '../../providers/disciplina/disciplina';
import { QuestaoPage } from '../questao/questao';


@IonicPage()
@Component({
  selector: 'page-op-questao',
  templateUrl: 'op-questao.html',
})
export class OpQuestaoPage {

  //private questoes: any;
  private id_disciplina: number;

  constructor(    
    public navCtrl: NavController, 
    public navParams: NavParams,
    private disciplinaProvider: DisciplinaProvider
  ) {
    this.id_disciplina = navParams.data.id;
  }

  ionViewDidLoad() {
    
  }

  onSimulado() {
    this.navCtrl.push(QuestaoPage, {id: this.id_disciplina});
  }

  onGetAll(): void {
   // this.disciplinaProvider.getAllQuestoesByDisciplina(this.id_disciplina)
    //  .subscribe((resp) => this.questoes = resp.json());
  }

}
