import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-entrada-salida',
  templateUrl: 'entrada-salida.page.html',
  styleUrls: ['entrada-salida.page.scss']
})
export class EntradaSalidaPage implements OnInit {

  empleados;
  form: FormGroup;

  constructor(private services: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.services.obtenerEmpleados().subscribe((data: any) => {
      this.empleados = data.rows;
    });
    this.form = this.formBuilder.group({
      empleado: ['', Validators.required],
      tipo_transaccion: ['', Validators.required]
    });
  }

  onChange(event: { component: IonicSelectableComponent, value: any }) {
    this.form.controls.empleado.setValue(event.value.codigo_empleado);
  }

  marcar(): void {
    this.services.insertarEntradaSalida(this.form.value).subscribe((data: any) => {
      this.form.reset();
      console.log(data);
    });
  }

}
