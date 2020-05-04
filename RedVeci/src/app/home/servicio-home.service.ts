import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, } from '@angular/common/http';

import { AlertController, Platform } from "@ionic/angular";
import 'rxjs/add/operator/map';
import * as JWT from "jwt-decode";
import { IonicStorageModule } from '@ionic/storage';
import * as jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class ServicioHomeService {
  Token: any;
  token_full: any;
  jwt_token: any;
  token_full_json: any;
  constructor(private http: HttpClient, private storage: IonicStorageModule, private alertCtrl:AlertController) {console.log('Hello ServiceProvider Provider');}
  login(newUser){
    console.log(newUser);    
    let data =JSON.stringify({
      email: newUser.email,
      password: newUser.password,
    }); 
    console.log(data);
 
        let options = {
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin':  'application/json', 
        }
      }; 
      var url= 'https://redveci.com/api/login';
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
  }
  
 /*  activo(): boolean {

    if (this.Token != "") {
      console.log("true");
      return true;

    } else {
      console.log("false");
      return false;
    }
  } */

  /* ingresar(codigo: string, usuario: string, contrasena: string) {

    const body = JSON.stringify({
      Codigo: codigo,
      Usuario: usuario,
      Password: contrasena
    });

    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post('https://redveci.com/api/login', body, { headers: headers })
      .map(async (resp: any) => {

        let jwt = jwt_decode(resp);

        console.log("Pruebas");
        console.log(jwt);

        console.log("resp sin formato");
        console.log(resp);

        console.log("resp decodificado con jwt");
        this.token_full = jwt_decode(resp);
        console.log(this.token_full);

        console.log("resp con json");
        console.log(JSON.stringify(jwt));

        if (resp.error) {
          const alert =  this.alertCtrl.create({
            header: "Error al iniciar",
            subHeader: jwt['Apellidos'],
            buttons: ["OK"]
          }
          ); 
          (await alert).present();
          
        } else {
          console.log("No hubo error al cargar");
          this.Token = jwt['Token'];
          this.token_full=resp;
          console.log(this.Token + this.token_full);
          this.guardar_storage();
        }
      }
      );
  } */

 /*  private guardar_storage() {
    if (this.platform.is("cordova")) {
      console.log("El token a guardar en storage es");
      console.log(this.Token);
      this.storage.set('Token', this.Token);
      this.storage.set('Token_Full', this.token_full);

    } else {
      if (this.Token != "") {
        console.log("Guardando token");
        localStorage.setItem("Token", this.Token);
        localStorage.setItem("Token_Full", this.token_full);
        console.log("El token guardado es:");
        console.log(localStorage.getItem("Token_Full"));
      } else {
        console.log("Removiendo token del local storage");
        localStorage.removeItem("Token");
        localStorage.removeItem("Token_Full");
      }
    }
  } */

  /* cargar_storage() {
    console.log("Entrando a cargar local storage");
    let promesa = new Promise((resolve, reject) => { */

/*       if (this.platform.is("cordova")) {
        // dispositivo
        console.log("Existen items en el local storage dispositivo cordova");
        this.storage.ready()
          .then(() => {

            this.storage.get("Token_Full")
              .then(Token => {
                console.log(Token);
                if (Token != "") {
                  this.Token = Token;
                  this.token_full=Token;
                }
              })
          })
      } else {} */
  /*       // computadora
        if (localStorage.getItem("Token_Full")) {
          //Existe items en el localstorage
          console.log("Existen items en el local storage computadora");
          this.token_full = localStorage.getItem("Token_Full");
          console.log(localStorage.getItem("Token_Full"));
        }
        resolve();
      
    });
    return promesa;
  } */

  /* getNovedades() {
    console.log("Token en almacenamiento interno");
    console.log(localStorage.getItem("Token_Full"));

    return new Promise(resolve => {
      this.http.post('https://redveci.com/api/login','12122017/12122018',{
        headers: new HttpHeaders().set('Authorization', localStorage.getItem("Token_Full")),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  } */

  /* Cerrar_Sesion() {

    this.token_full = null;
    // guardar storage
    this.guardar_storage();
  } */

}
