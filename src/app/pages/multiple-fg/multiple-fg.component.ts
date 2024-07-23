import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Validators,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multiple-fg',
  standalone: true,
  imports: [CommonModule, MaterialComponentModule, ReactiveFormsModule],
  templateUrl: './multiple-fg.component.html',
  styleUrl: './multiple-fg.component.scss',
})
export class MultipleFgComponent implements OnInit {
  private snackBar = inject(MatSnackBar);

  formu!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  private buildForm() {
    this.formu = this.formBuilder.group({
      fullName: this.formBuilder.group({
        name: ['', [Validators.required, Validators.pattern(/^[a-zA]+$/)]],
        last: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA]+$/)],
        ], /*agregar condicion para que acepte la ñ, el espacio y los acentos tanto en name como en last*/
      }),
      age: [18, [Validators.required, Validators.min(18), Validators.max(110), Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      color: ['#000000'],
      date: ['', [Validators.required]],
      escolar: ['bachillerato', [Validators.required]],
      pasatiempo: ['', [Validators.required]],
      estado: ['soltero', [Validators.required]],
      gender: [undefined, [Validators.required]],
      policy: [false, [Validators.requiredTrue]],
      termino: [false, [Validators.requiredTrue]],
    });
/*
    const fullNameGroup = this.formu.get('fullName') as FormGroup;
    fullNameGroup.markAsTouched();
    if(fullNameGroup.valid){
      console.log('Procesos correcto');
    } else {
      console.log('Proceso incorrecto');
    }

    const fullNameGroupValue = this.formu.get('fullName')?.value;
    if(fullNameGroupValue.name != null && fullNameGroupValue.last != null){
      console.log('Procesos correcto');
    } else {
      console.log('Proceso incorrecto');
    }
     */
  }

  ngOnInit(): void {
    this.nameFc?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  get nameFc() {
    return this.formu.get('fullName')?.get('name');
  }

  /* Se puede hacer una contracción para no tener que poner dos veces get */
  get lastFc() {
    return this.formu.get('fullName.last');
  }

  get ageFc() {
    return this.formu.get('age');
  }

  get emailFc() {
    return this.formu.get('email');
  }

  /* También se puede implementar con FormControl*/
  get phoneControl(): FormControl {
    return this.formu.get('phone') as FormControl;
  }

  get colorFc() {
    return this.formu.get('color');
  }

  get dateFc() {
    return this.formu.get('date');
  }

  get escolarFc() {
    return this.formu.get('age');
  }

  get pasatiempoFc() {
    return this.formu.get('pasatiempo');
  }

  get estadoFc() {
    return this.formu.get('estado');
  }

  get genderFc() {
    return this.formu.get('gender');
  }

  get policyFc() {
    return this.formu.get('policy');
  }

  get terminoFc() {
    return this.formu.get('termino');
  }

  guardar(event: Event) {
    this.formu.markAllAsTouched();
    if (this.formu.valid) {
      console.log('Form Data: ', event);
    } else {
      this.snackBar.open('Revisa tu formulario', 'Error');
      console.log('Form is invalid');
    }
  }
}
