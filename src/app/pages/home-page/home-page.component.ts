import { Component } from '@angular/core';
import { DatosService } from 'src/app/shared/services/datos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  monedas!: any[];

  constructor(private datosServices: DatosService){
    this.datosServices.getMonedas().subscribe((res:any) =>{
      console.log(res);
      this.monedas = res;
    })
  }

}
