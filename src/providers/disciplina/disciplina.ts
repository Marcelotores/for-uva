import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DisciplinaProvider {

  constructor(private http: Http) {}

  private api_url = 'http://localhost:8000/api';

  getAllDisciplinas() {
    return this.http.get(`${this.api_url}/disciplinas`);
  }

  getAllQuestoesByDisciplina(id) {
    return this.http.get(`${this.api_url}/questoes/disciplina/${id}`);
  }

  setNota(user_id: number, disciplina_id: number, qtd_acertos: number) {
    return this.http.post(`${this.api_url}/nota`, {user_id: user_id, disciplina_id: disciplina_id, qtd_acertos: qtd_acertos});
  }

}
