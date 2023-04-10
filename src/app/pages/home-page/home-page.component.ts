import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/shared/services/datos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  monedas!: any[];
  nombreMonedas!: '';

  constructor(private datosServices: DatosService){
    
  }
  ngOnInit(): void {
    this.imprimirMonedas("",1)
  }

  imprimirMonedas(nombre:string,moneda:number){
    this.datosServices.getMonedas().subscribe((res:any) =>{
      console.log(res.rates);
      // this.monedas = res.rates;
    })
  }
  cambioMoneda(rates:string){
    this.datosServices.getCambioMonedas(rates).subscribe((res:any) =>{
      this.monedas = res.rates;
    })
  }

}
