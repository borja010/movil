import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppService } from '../app.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-credito',
  templateUrl: 'credito.page.html',
  styleUrls: ['credito.page.scss']
})
export class CreditoPage  implements OnInit {

  clientes;
  form: FormGroup;

  constructor(private services: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.services.obtenerClientes().subscribe((data: any) => {
      this.clientes = data.rows;
    });
    this.form = this.formBuilder.group({
      cliente: ['', Validators.required],
      monto: ['', Validators.required],
      tipo_transaccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      empleado: ['1', Validators.required]
    });
  }

  reload(){
    this.services.obtenerClientes().subscribe((data: any) => {
      this.clientes = data.rows;
    });
  }

  onChange(event: { component: IonicSelectableComponent, value: any }) {
    this.form.controls.cliente.setValue(event.value.codigo_cliente);
  }

  guardar(): void {
    if(this.form.value.tipo_transaccion === 'p'){
      this.form.value.monto = '-' + this.form.value.monto;
    }
    this.services.insertarCredito(this.form.value).subscribe(data =>{
      let cliente = this.form.value.cliente;
      let empleado = this.form.value.empleado;
      this.form.reset();
      this.form.controls.cliente.setValue(cliente);
      this.form.controls.empleado.setValue(empleado);
    });
  }
}
