import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaProvider } from '../../providers/disciplina/disciplina';
import { QuestaoProvider } from '../../providers/questao/questao';


@IonicPage()
@Component({
  selector: 'page-questao',
  templateUrl: 'questao.html',
})
export class QuestaoPage {

  private questoes: any[] = [];
  private questao: any[] = [];
  private alternativas: any[] = [];
  private relationship: any;
  private respostas: any[] = [];
  private user = 2;
  private questoesFeitas: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private disciplinaProvider: DisciplinaProvider,
    private questaoProvider: QuestaoProvider
  ) {

  }

  ionViewDidLoad() {
    this.getByDisciplina();
  }

  onResposta() {

    if (this.relationship) {
      let flag = false;


      this.alternativas.forEach(elementAlt => {

        // Quando a questão é resolvida pela segunda vez, então a primeira ocorrencia daquela questao é exluida do vetor.
        this.respostas.forEach(elementResp => {
          if (elementAlt.questao_id === elementResp.questao) {
            this.respostas.splice(this.respostas.indexOf(elementResp), 1);
          }
        });

      });

      this.alternativas.forEach(elementAlt => {
        // Se a questão estiver correta esta é colocada no vetor
        if (elementAlt.letra === this.relationship && elementAlt.correta === 1) {

          flag = true;
          this.respostas.push({ questao: elementAlt.questao_id, resposta: this.relationship, correta: true });

        }


      });

      // Se a questão estiver incorreta, tambem é colocada no vetor
      if (!flag) {
        this.respostas.push({ questao: this.alternativas[0].questao_id, resposta: this.relationship, correta: false });
      }

       console.log(this.respostas);
    } else {
      console.log('Marque uma opção');

    }

  }

  onfinalize() {

    let data = {
      user_id: this.user,
      disciplina_id: this.navParams.data.id,
      qtd_acertos: this.qtdAcertos()
    }

    console.log(this.qtdAcertos());

    this.disciplinaProvider.setNota(data.user_id, data.disciplina_id, data.qtd_acertos)
      .subscribe((resp) => {
        this.navCtrl.pop();
        console.log(resp);
      });

  }

 

  proxQuestao() {

    let num;

    do {
      num = Math.floor(Math.random() * this.questoes.length);     
    } while (this.questao[0] == this.questoes[num] && this.questoes.length > 1);
    

    this.questao.splice(0);
    this.questao.push(this.questoes[num]);
    this.questaoProvider.getAlternativas(this.questao[0].id)
      .subscribe((resp) => {
        this.alternativas = resp.json();
      });

  }

  getByDisciplina() {
    this.disciplinaProvider.getAllQuestoesByDisciplina(this.navParams.data.id)
      .subscribe((resp: any) => {
        for (let i = 0; i < resp.json().length; i++) {
          let q = resp.json()[i];
          this.questoes.push(q);
        }
        
        this.proxQuestao();
        
      });
  }

  getByDisciplina2(): void {
    this.disciplinaProvider.getAllQuestoesByDisciplina(this.navParams.data.id)
      .subscribe((resp) => this.questoes = resp.json());
  }

  /**
   * Algumas funções
   * 
   */

  qtdAcertos(): number {
    let qtdA = 0;
    this.respostas.forEach(element => {
      if (element.correta) {
        qtdA++;
      }
    });

    return qtdA;
  }

}
