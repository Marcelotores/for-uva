import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';

@Injectable()
export class LoginProvider {

  private url_login =  'http://localhost:8000/api';

  constructor(public http: Http) {}

  login(credentials: {email: string, senha: string}) {
    return this.http.post(`${this.url_login}/auth/login`, credentials);
     // .subscribe((data) => {
     //   console.log(data);
        
        /*
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['']);
        */
   //   });
  }

  signup(user: any) {
    return this.http.post(`${this.url_login}/auth/register`, user)
      .subscribe((data) => {
        console.log(data);
        /*
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        */
      });
  }

  logout() {
    return this.http.get(`${this.url_login}/auth/logout`)
      .subscribe((data) => {
        console.log(data);
        /*
        localStorage.clear();
        this.router.navigate(['auth/login']);
        */
      });
  }

  me() {
    return this.http.get(`${this.url_login}/auth/me`);
  }

  check(): boolean {
    return !!localStorage.getItem('token');

    /*
    if (localStorage.getItem('token'))
      return true;

    return false;
    */
  }

}
