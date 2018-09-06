import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class QuestaoProvider {

  constructor(private http: Http) {}

  private api_url = 'http://localhost:8000/api';

  getAlternativas(questao_id: number) {
    return this.http.get(`${this.api_url}/alternativas/${questao_id}`);
  }

}
