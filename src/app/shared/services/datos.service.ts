import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getMonedas(){
    return this.http.get("https://api.vatcomply.com/rates");
  }

  getCambioMonedas(rates: string){
    return this.http.get(`https://api.vatcomply.com/rates=${rates}`);
  }


}
