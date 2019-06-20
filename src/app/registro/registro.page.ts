import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user=
  {
    usuario:"gat",
    correo:"gateto@misena.mesena.edu",
    contraseña:"123456",
    nombre:"elmacho",
    apellidos:"Pechopeludo"


  }

  constructor(public loadingCtrl:LoadingController) { }

  ngOnInit() {
  }


  async login(forma:NgForm)
  {
    if (forma.valid) 
    {
      console.log("ingreso a login");  
      const loading = await this.loadingCtrl.create({
	        message: 'gracias por registrarse',
          spinner: 'bubbles',
          duration: 2000
	      });
	      loading.present();
	      //this.user.usuario = forma.value.usuario;
        //this.user.pasword = forma.value.email;
        //this.user.pasword = forma.value.contraseña;
        //this.user.pasword = forma.value.nombres;
        //this.user.pasword = forma.value.apellidos;
      
      if ( this.user.usuario === forma.value.usuario)
      { 
        loading.dismiss();
        console.log("verdadero")
        //this.user.usuario = forma.value.email;
        //this.user.pasword = forma.value.clave;
        //this.user.pasword = forma.value.;
        //this.user.pasword = forma.value.;
        //this.user.pasword = forma.value.;
      } 
      else 
      {
        console.log("falso")
      }
    }
  }
}
