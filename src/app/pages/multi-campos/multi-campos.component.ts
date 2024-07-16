import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-campos',
  standalone: true,
  imports: [MaterialComponentModule, CommonModule, ReactiveFormsModule],
  templateUrl: './multi-campos.component.html',
  styleUrl: './multi-campos.component.scss',
})
export class MultiCamposComponent implements OnInit {
  /* Formulario usando FormGrup para multiples campos*/
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    escolar: new FormControl('bachillerato'),
    pasatiempo: new FormControl(''),
    estado: new FormControl('soltero', Validators.required),
    gender: new FormControl(''),
    policy: new FormControl(false, Validators.required),
    termino: new FormControl(false, Validators.required),
  });

  ngOnInit(): void {
    this.nameField?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  get nameField() {
    return this.form.get('name');
  }

  get emailField() {
    return this.form.get('email');
  }

  get phoneField() {
    return this.form.get('phone');
  }

  get colorField() {
    return this.form.get('color');
  }

  get dateField() {
    return this.form.get('date');
  }

  get escolarField() {
    return this.form.get('age');
  }

  get pasatiempoField() {
    return this.form.get('pasatiempo');
  }

  get estadoField() {
    return this.form.get('estado');
  }

  get genderField() {
    return this.form.get('gender');
  }

  get policyField() {
    return this.form.get('policy');
  }

  get termino() {
    return this.form.get('termino');
  }

  guardar(event: Event) {
    if (this.form.valid) {
      console.log('Form Data: ', event);
    } else {
      console.log('Form is invalid');
    }
  }
}
