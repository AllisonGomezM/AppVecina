import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { ServicioRegistroService } from "./servicio-registro.service";
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  newCuenta: ICuenta ={
    name:"",
    email:"",
    password:"",
    password_confirmation:"",
  };
  regi= [];
  data:Observable<any>[];
  token=[];
  constructor(public alertCtrl: AlertController, private servicioRegistro:ServicioRegistroService, private http:HttpClient,public navCtrl: NavController, public router: Router) { }
  crear(){
    if(this.newCuenta.name==""||this.newCuenta.email==""||this.newCuenta.password==""||this.newCuenta.password_confirmation==""){
      this.doAlert();
    }
    if(this.newCuenta.password==this.newCuenta.password_confirmation){
      this.servicioRegistro.crear(this.newCuenta).then((data)=>{
        console.log(this.newCuenta);
        if (data["ok"]){
          console.log(data);
          this.servicioRegistro.getToken= data ['token'];
          console.log(this.token);
          this.router.navigate(['/menu']);
        }
      },
      error=>{
        console.log("error baby");
      }
      ) 
    }
    else{
      this.AlertPass();
    }
    
  
  }

  async doAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Campos vacios',
      subHeader: 'Alguno de los campos están vacios',
      buttons: [
        {
          text:'OK',
          
        }
      ],
    }
    );
    
    await alert.present();
  }
  async AlertPass() {
    const alert = await this.alertCtrl.create({
      header: 'Ups!',
      subHeader: 'Las contraseñas no coinciden',
      buttons: ['OK']
    });

    await alert.present();
  }

  async guardar() {
    const alert = await this.alertCtrl.create({
      header: 'Genial!',
      subHeader: 'Ya creamos tu cuenta',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
interface ICuenta{
  name:String;
  email:String;
  password:String;
  password_confirmation:String;
}
