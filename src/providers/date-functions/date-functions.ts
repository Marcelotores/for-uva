import { Injectable } from '@angular/core';

@Injectable()
export class DateFunctionsProvider {

  private meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  private dias = ["domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  constructor() {

  }

  formatarData(str2: any) {
    let str = this.dateToEN(str2);
    var partes = str.split('-').map(Number);
    //var data = new Date(partes[2], partes[1] - 1, partes[0]);
    console.log(str);
    //var diaSemana = this.dias[data.getDay() % 7];
    //var mes = this.meses[data.getMonth()];
   // return [data.getDate(), mes.slice(0, 3).toLowerCase(), '(' + diaSemana.slice(0, 3) + ')'].join(' ');
  }

  private dateToEN(date2) {
    let date = date2.split('-', 3).map(Number);
    return date.split('-').reverse().join('-');
  }


}
