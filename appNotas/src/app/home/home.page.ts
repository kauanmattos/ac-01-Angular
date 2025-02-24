import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  notaUm = 0;
  notaDois = 0;
  notaTres = 0;
  notaQuatro = 0;
  resultado = '';

  constructor() {}

   calcularMedia(){
    const media = (this.notaUm + this.notaDois + this.notaTres + this.notaQuatro) / 4

    if (media >= 6) {
      this.resultado = 'Você Passou!';
    } else if (media >= 3 && media <= 5.9) {
      this.resultado = 'Ficou de Recuperação.';
    } else {
      this.resultado = 'Retido';
    }
  }
}
