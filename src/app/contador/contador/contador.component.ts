import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

<h1> {{ titulo }} </h1>
<h3>La base es: <strong> {{ base }} </strong></h3>

<!--<button (click)=" numero = numero + 1; "> + 1</button> //eventos se definen con parentesis-->
<button (click)=" acumular( base ) "> + {{ base }}</button>

<span> {{ numero }} </span>

<button (click)=" acumular( -base ) "> - {{ base }}</button>
<!--<button (click)=" numero = numero - 1; "> - 1</button> -->


  `,
  styleUrls: ['./contador.component.scss']
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

 /* sumar() {
    this.numero += 1; //se requiere el this para hacer referencia a la propiedad de la clase
  }

  restar() {
    this.numero -= 1;
  } */

  acumular ( valor: number  ) {
    this.numero += valor;
  }

 }
