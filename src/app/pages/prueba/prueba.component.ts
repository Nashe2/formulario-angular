import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '../../layout/layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, MaterialComponentModule, LayoutComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.scss'
})
export class PruebaComponent{
  private formB = inject(FormBuilder);
  entradaForm: FormGroup;

  inmuebles = [
    { ID: 1, nombre_inmueble: 'Inmueble 1' },
    { ID: 2, nombre_inmueble: 'Inmueble 2' },
  ];

  constructor(private fb: FormBuilder) {
    this.entradaForm = this.fb.group({
      fecha: ['', Validators.required],
      entrega: ['', Validators.required],
      puesto: ['', Validators.required],
      empresa: ['', Validators.required],
      observaciones: [''],
      inmuebleId: ['', Validators.required],
      motivo: ['', Validators.required],
      descargar: [false],
    });
  }

  /* ngOnInit(){} */

  guardar(event: Event) {
    /* value: any */
    if (this.entradaForm.valid) {
      console.log('Form Data: ', event);
    } else {
      console.log('Form is invalid');
    }
  }
}

