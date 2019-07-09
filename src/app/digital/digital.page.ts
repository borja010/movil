import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.page.html',
  styleUrls: ['./digital.page.scss'],
})
export class DigitalPage implements OnInit {

  form: FormGroup;
  mangueras: [];

  constructor(private services: AppService, private formBuilder: FormBuilder, private loadingController: LoadingController, private alertCtrl: AlertController) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      manguera: ['', Validators.required],
      galones: ['', Validators.required],
      monetario: ['', Validators.required],
      empleado: ['', Validators.required]
    });
    let loading = await this.loadingController.create({
      message: 'Espere un momento',
    });
    loading.present();
    this.form.controls.empleado.setValue(localStorage.getItem("usuario"));
    this.services.obtenerMangueras().subscribe((data: any) => {
      this.mangueras = data;
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

  async guardar() {
    let loading = await this.loadingController.create({
      message: 'Espere un momento, enviando datos',
    });
    loading.present();
    this.services.insertarDigital(this.form.value).subscribe((data) => {
      loading.dismiss();
      this.form.reset();
      this.form.controls.empleado.setValue(localStorage.getItem("usuario"));
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

}
