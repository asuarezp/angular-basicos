import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  elementoBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando...');
    // this.heroes.splice(1, 1);
    this.elementoBorrado = this.heroes.shift() ?? '';
  }

}
