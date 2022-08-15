import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent { //ciclos de vida, se disparan de manera automatica

  /*constructor() {
    //console.log( 'Constructor'); //primero se compila el constructor
  }

  ngOnInit(): void {
    console.log('On Init')
  }*/

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    //console.log('borrando...');
    //this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
