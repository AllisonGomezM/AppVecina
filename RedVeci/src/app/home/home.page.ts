import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { ServicioHomeService } from "./servicio-home.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newUser: IUser ={
    email:"",
    password:"",
  };
  user = [];
  constructor(public alertCtrl: AlertController, private servicioLogin:ServicioHomeService, public navCtrl: NavController, public router: Router) {}

  login(){
    if(this.newUser.email==""&&this.newUser.password==""){
      this.doAlert();
    }else{
      console.log(this.newUser.email,this.newUser.password);
     
      this.servicioLogin.login(this.newUser).then((data)=>{
        console.log(this.newUser);
        if (data["ok"]){
          console.log(data); 
        }
      }) 
      this.router.navigate(['/menu']);

/*       this.navCtrl.navigateRoot('folderpage'); */
    }

  }
  async doAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Campos vacios',
      subHeader: 'Email o contraseña vacios',
      buttons: ['OK']
    });

    await alert.present();
  }
}
interface IUser{
  email:String;
  password:String;
  }