import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DisciplinasPage } from '../pages/disciplinas/disciplinas';
import { DisciplinaProvider } from '../providers/disciplina/disciplina';

import { HttpModule } from '@angular/http';
import { QuestaoPage } from '../pages/questao/questao';
import { OpQuestaoPage } from '../pages/op-questao/op-questao';
import { QuestaoProvider } from '../providers/questao/questao';
import { UserProvider } from '../providers/user/user';
import { NotaPage } from '../pages/nota/nota';
import { DateFunctionsProvider } from '../providers/date-functions/date-functions';
import { LoginProvider } from '../providers/login/login';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisciplinasPage,
    QuestaoPage,
    OpQuestaoPage,
    NotaPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisciplinasPage,
    QuestaoPage,
    OpQuestaoPage,
    NotaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DisciplinaProvider,
    QuestaoProvider,
    UserProvider,
    DateFunctionsProvider,
    LoginProvider
  ]
})
export class AppModule {}
