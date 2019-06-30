import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'entrada-salida',
        children: [
          {
            path: '',
            loadChildren: '../entrada-salida/entrada-salida.module#EntradaSalidaPageModule'
          }
        ]
      },
      {
        path: 'digital',
        children: [
          {
            path: '',
            loadChildren: '../digital/digital.module#DigitalPageModule'
          }
        ]
      },
      {
        path: 'analoga',
        children: [
          {
            path: '',
            loadChildren: '../analoga/analoga.module#AnalogaPageModule'
          }
        ]
      },
      {
        path: 'credito',
        children: [
          {
            path: '',
            loadChildren: '../credito/credito.module#CreditoPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/entrada-salida',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
