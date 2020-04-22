import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {

  constructor(private http: HttpClient, private cookies: CookieService) {console.log('Hello ServiceProvider Provider'); }
  crear(newCuenta){
    console.log(newCuenta);    
    let data =JSON.stringify({
      name: newCuenta.name,
      email: newCuenta.email,
      password: newCuenta.password,
      password_confirmation: newCuenta.password_confirmation
    }); 
    console.log(data);
 
        let options = {
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin':  'application/json', 
        }
      }; 
      var url= 'https://redveci.com/api/register';
      return new Promise((resolve, reject) => {
        this.http.post(url, data, options)
        .toPromise()
        .then((response) =>
        {
          console.log('API Response TOKEN : ', response);
          resolve(response);
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
      /* return new Promise(resolve=>{
        this.http.post(url,data,options)
        .subscribe(data =>{
          resolve(data);})
        
      });  */
    /* return this.http.post<any>('https://redveci.com/api/register&name='+newCuenta.nombre+ '&email='+newCuenta.email+'&password='+newCuenta.password+'&password_confirmation='+newCuenta.pass_confirmar,
      {
         "name": newCuenta.nombre,
         "email": newCuenta.email,
         "password":newCuenta.password,
         "password_confirmation":newCuenta.pass_confirmar,
        
      },
           
    ); */
  }
  setToken(token: string) {
    this.cookies.set("token", token);
    console.log(token);
  }
  getToken() {
    return this.cookies.get("token");
    console.log(this.cookies.get("token"));
  }
}
