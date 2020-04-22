import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioHomeService {

  constructor(private http: HttpClient) {console.log('Hello ServiceProvider Provider');}
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
}
