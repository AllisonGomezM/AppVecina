import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})

export class ServicioRegistroService {

  Token: any;
  token_full: any;
  jwt_token: any;
  token_full_json: any;

  constructor(private http: HttpClient, private cookies: CookieService,  private storage: Storage) {
/*     this.cargar_storage();
 */    console.log('Hello ServiceProvider Provider'); 
  }
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
          let jwt = resolve(response);
          console.log(jwt);
        })
        .catch((error) =>
        {
          console.error('API Error : ', error.status);
          console.error('API Error : ', JSON.stringify(error));
          reject(error.json());
        });
      });
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
