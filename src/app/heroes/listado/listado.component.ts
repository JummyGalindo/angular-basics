import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  fueEliminado: boolean = false;

  borrarHeroe(): void{
    this.heroeBorrado = this.heroes.shift() || '';
    this.fueEliminado = true;
    if(this.heroes.length === 0){
      this.fueEliminado = false;
    }
  }
}
