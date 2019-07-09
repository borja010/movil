import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValePage } from './vale.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ValePage }]),
    IonicSelectableModule
  ],
  declarations: [ValePage]
})
export class ValePageModule {}
