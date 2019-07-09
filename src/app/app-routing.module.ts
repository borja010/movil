import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'entrada-salida',
    loadChildren: './entrada-salida/entrada-salida.module#EntradaSalidaPageModule'
  },
  {
    path: 'digital',
    loadChildren: './digital/digital.module#DigitalPageModule'
  },
  {
    path: 'analoga',
    loadChildren: './analoga/analoga.module#AnalogaPageModule'
  },
  {
    path: 'vale',
    loadChildren: './vale/vale.module#ValePageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
