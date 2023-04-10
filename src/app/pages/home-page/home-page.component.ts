import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from 'src/app/shared/services/datos.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  monedas: any = [];
  nombreMonedas!: '';
  base: any = "EUR"; 

  constructor(private datosServices: DatosService, private route: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( paramas =>{
      this.getMoneda( this.base );
    })
  }

  getMoneda( base: string | null = "EUR" ){
    // console.log(base);
    
    this.datosServices.getMonedas().subscribe((res:any) =>{
      this.monedas = [];
      for (const key in res.rates) {
        let moneda = {'moneda':key, value: res.rates(key)};
        this.monedas.push(moneda);
      }
  })
  }

}
