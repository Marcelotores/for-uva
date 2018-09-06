import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  private api_url = 'http://localhost:8000/api';
  user = 1;

  constructor(private http: Http) {}

  getNotaByAluno(user_id: number) {
    return this.http.get(`${this.api_url}/notas/aluno/${user_id}`);
  }

}
