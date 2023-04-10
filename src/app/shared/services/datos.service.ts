import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getMonedas(base: string = "EUR"){
    return this.http.get("https://api.vatcomply.com/rates");
  }

  // getCambioMonedas(base: string = "EUR"){
  //   return this.http.get("https://api.vatcomply.com/rates?base=" + base)
  // }


}
