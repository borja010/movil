import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-entrada-salida',
  templateUrl: 'entrada-salida.page.html',
  styleUrls: ['entrada-salida.page.scss']
})
export class EntradaSalidaPage implements OnInit {

  empleados;
  form: FormGroup;

  constructor(private services: AppService, private formBuilder: FormBuilder, private loadingController: LoadingController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      empleado: ['', Validators.required],
      tipo_transaccion: ['', Validators.required],
      supervisor: ['', Validators.required],
    });
    let loading = await this.loadingController.create({
      message: 'Espere un momento',
    });
    loading.present();
    this.form.controls.supervisor.setValue(localStorage.getItem("usuario"));
    this.services.obtenerEmpleados().subscribe((data: any) => {
      this.empleados = data.rows;
      loading.dismiss();
    },
      async error => {
        let alerta = await this.alertCtrl.create({
          header: 'Error',
          message: "Error con el servidor, contactar administrador",
          buttons: ['Ok']
        });
        alerta.present();
      });
  }

  onChange(event: { component: IonicSelectableComponent, value: any }) {
    this.form.controls.empleado.setValue(event.value.codigo_empleado);
  }

  async marcar() {
    let loading = await this.loadingController.create({
      message: 'Espere un momento, enviando datos',
    });
    loading.present();
    this.services.insertarEntradaSalida(this.form.value).subscribe(async (data: any) => {
      loading.dismiss();
      if(data.rows[0].insertar_entrada_salida === -1){
        let alerta = await this.alertCtrl.create({
          header: 'Mensaje',
          message: "El empleado no ha marcado entrada",
          buttons: ['Ok']
        }); 
        alerta.present();
      }else{
        let alerta = await this.alertCtrl.create({
          header: 'Mensaje',
          message: "Insertado exitosamente",
          buttons: ['Ok']
        }); 
        alerta.present();
      }
      this.form.controls.tipo_transaccion.reset();
    });
  }

}
