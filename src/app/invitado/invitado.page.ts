import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {
  
  title: string;
  number: number;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
 async mostrarpop(event){
   const popover = await this.popoverController.create({
     component : PopoverComponent,
     event: event,
     translucent: true


   });
      return await popover.present();
 }
}
