import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-vale',
  templateUrl: 'vale.page.html',
  styleUrls: ['vale.page.scss']
})
export class ValePage  implements OnInit {

  clientes;
  form: FormGroup;

  constructor(private services: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      numero: ['', Validators.required],
      direccion: ['', Validators.required],
      cliente: ['', Validators.required],
      monto: ['', Validators.required],
      empleado: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
    this.reload();
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
