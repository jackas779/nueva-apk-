import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user=
  {
    usuario:"gat",
    pasword:"123"
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
	        message: 'Validando...',
	        spinner: 'bubbles'
	      });
	      loading.present();
	      //this.user.usuario = forma.value.email;
        //this.user.pasword = forma.value.clave;
      
      if ( this.user.usuario === forma.value.usuario)
      { 
        loading.dismiss();
        console.log("verdadero")
        //this.user.usuario = forma.value.email;
        //this.user.pasword = forma.value.clave;
      } 
      else 
      {
        console.log("falso")
      }
    }
  }
}
