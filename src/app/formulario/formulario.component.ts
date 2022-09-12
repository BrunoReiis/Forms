import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero1: number = 0;
  numero2: number = 0;

  somar(){
    alert(Number(this.numero1) + Number(this.numero2))
  }
}
