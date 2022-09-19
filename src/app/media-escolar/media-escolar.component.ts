import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-escolar',
  templateUrl: './media-escolar.component.html',
  styleUrls: ['./media-escolar.component.css']
})
export class MediaEscolarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numero1: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  result: number = 0;
  notaFinal: number = 0;
  paragrafo = "";

  somar(){
    this.result = ((Number(this.numero1) + Number(this.numero2) + Number(this.numero3)))
    this.notaFinal = this.result / 3;
   return this.notaFinal;
  }

  mudarParagrafo()
  {
    if (this.notaFinal >= 7)
    {
      this.paragrafo = "Aprovado";
    }
    if (this.notaFinal < 7)
    {
      this.paragrafo = "Reprovado";
    }
    return this.paragrafo;
  }

  limparParagrafro()
  {
    this.paragrafo = "";
    return this.paragrafo;
  }
}

