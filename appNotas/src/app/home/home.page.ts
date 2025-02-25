import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  // Convertor De Temperatura - EX 01
  valorC = 0;
  valorF = 0;
  valorConvertidoPraC = 0;
  valorConvertidoPraF = 0;

  // Verificação de Triângulo - EX 02
  lado1 = '';
  lado2 = '';
  lado3 = '';
  res = ''

  // Calculadora de Notas - EX 03
  notaUm = 0;
  notaDois = 0;
  notaTres = 0;
  notaQuatro = 0;
  resultado = '';

  constructor() { }

  
  //EX 01
  converterPraC() {
    this.valorConvertidoPraC = (this.valorF - 32) * (5 / 9)
  }
  converterPraF() {
    this.valorConvertidoPraF = (9 * this.valorC + 160) / 5;
  }

  //EX 02

  tipoTriangulo(){
    if (this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1) {
      if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
        this.res = 'Triângulo Equilátero';
      } else if (this.lado1 === this.lado2 || this.lado1 === this.lado3 || this.lado2 === this.lado3) {
        this.res = 'Triângulo Isósceles';
      } else {
        this.res = 'Triângulo Escaleno';
      }
    }
  }

  verificarTriangulo(){
    if (this.lado1 + this.lado2 > this.lado3 &&
      this.lado1 + this.lado3 > this.lado2 &&
      this.lado2 + this.lado3 > this.lado1) {
      this.res = 'É um Triângulo.'
  } else {
    this.res = 'Não é um Triângulo.'
  }
}


//EX 03

calcularMedia() {
  const media = (this.notaUm + this.notaDois + this.notaTres + this.notaQuatro) / 4

  if (media >= 6) {
    this.resultado = `Você Passou! sua nota foi: ${media}`;
  } else if (media >= 3 && media <= 5.9) {
    this.resultado =  `Vocêficou de recuperação sua nota foi: ${media}`;
  } else {
    this.resultado =  `Você ficou retido, sua nota foi: ${media}`;
  }
}
}


