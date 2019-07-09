import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagoPage } from './pago.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: PagoPage }]),
    IonicSelectableModule
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}
