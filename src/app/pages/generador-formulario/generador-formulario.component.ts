import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms';
import { MaterialComponentModule } from '../../material-component/material-component.module';

@Component({
  selector: 'app-generador-formulario',
  standalone: true,
  imports: [MaterialComponentModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './generador-formulario.component.html',
  styleUrl: './generador-formulario.component.scss',
})
export class GeneradorFormularioComponent implements OnInit {
  /* Formulario usando el generador de formulario FormBuilder*/
  formu!: FormGroup;

  constructor(private fromBuilder: FormBuilder){
  this.buildForm();
  }


  private buildForm(){
    this.formu = this.fromBuilder.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA]+$/)]],/* agregar condición para que acepte la ñ */
    age: [18, [Validators.required, Validators.min(18), Validators.max(110)]],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.maxLength(10)]],
    color: ['#000000'],
    date: [''],
    escolar: ['bachillerato'],
    pasatiempo: ['', [Validators.required]],
    estado: ['soltero', [Validators.required]],
    gender: [''],
    policy: [false, [Validators.requiredTrue]],
    termino: [false, [Validators.requiredTrue]],
    });
  }

    ngOnInit(): void {
      this.nameField?.valueChanges.subscribe((value) => {
        console.log(value);
      });
    }

    get nameField() {
      return this.formu.get('name');
    }

    get ageField() {
      return this.formu.get('age');
    }

    get emailField() {
      return this.formu.get('email');
    }

    /* También se puede implementar con FormControl*/
    get phoneControl(): FormControl {
      return this.formu.get('phone') as FormControl;
    }


    get colorField() {
      return this.formu.get('color');
    }

    get dateField() {
      return this.formu.get('date');
    }

    get escolarField() {
      return this.formu.get('age');
    }

    get pasatiempoField() {
      return this.formu.get('pasatiempo');
    }

    get estadoField() {
      return this.formu.get('estado');
    }

    get genderField() {
      return this.formu.get('gender');
    }

    get policyField() {
      return this.formu.get('policy');
    }

    get termino() {
      return this.formu.get('termino');
    }

    guardar(event: Event) {
      if (this.formu.valid) {
        console.log('Form Data: ', event);
      } else {
        console.log('Form is invalid');
      }
    }

  }
