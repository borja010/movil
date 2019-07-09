import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private services: AppService, private formBuilder: FormBuilder, private router: Router, private loadingController: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  async login() {
    let loading = await this.loadingController.create({
      message: 'Espere un momento, estamos autenticando',
    });
    loading.present();
    this.services.login({ usuario: this.form.value.usuario, password: this.form.value.contrasena, origen: "movil" }).subscribe(async (data: any) => {
      if (data.estado) {
        localStorage.setItem("usuario", data.codigo_usuario);
        localStorage.setItem("token", data.token);
        this.form.reset();
        this.router.navigate(['entrada-salida']);
        loading.dismiss();
      } else {
        let alerta = await this.alertCtrl.create({
          header: 'Error',
          message: data.mensaje,
          buttons: ['Ok']
        });
        alerta.present();
        loading.dismiss();
        this.form.reset();
      }
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
