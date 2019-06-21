import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InfoparkPage } from '../infopark/infopark.page';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  [x: string]: any;

  constructor(public popovercontroller: PopoverController) { }

  ngOnInit() {}
  doc() {
  window.open()
  this.popovercontroller.dismiss();
   }
   close(){
     this.popovercontroller.dismiss();
   }
   async ciudad(){
     const modal = await this.modalcontroller.create({
      component: InfoparkPage

     });
     await modal.present();
   }

}
