import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-digital',
  templateUrl: './digital.page.html',
  styleUrls: ['./digital.page.scss'],
})
export class DigitalPage implements OnInit {

  form: FormGroup;
  totalBombas: Number[];
  tipoCombustible;

  constructor(private services: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.services.obtenerTotalBombaManguera().subscribe((data: any) => {
      this.totalBombas = Array(data.total_bomba_manguera).fill(0, 0, data.total_bomba_manguera).map((x, i) => i + 1);
      this.services.obtenerTipoCombustible().subscribe((data: any) => {
        this.tipoCombustible = data;
      });
    });
    this.form = this.formBuilder.group({
      bomba_manguera: ['', Validators.required],
      tipo_combustible: ['', Validators.required],
      galones: ['', Validators.required],
      monetario: ['', Validators.required],
      empleado: ['1', Validators.required]
    });
  }

  guardar() {
    this.services.insertarDigital(this.form.value).subscribe(data => {
      this.form.reset();
      console.log(data);
    });
  }

}
