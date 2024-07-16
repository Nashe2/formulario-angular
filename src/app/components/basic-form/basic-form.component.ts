import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import {
  ReactiveFormsModule,
  Validators,
  FormControl
} from '@angular/forms';
import { LayoutComponent } from '../../layout/layout.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [
    CommonModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    RouterModule,
    LayoutComponent,
  ],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
})
export class BasicFormComponent {

  nameControl= new FormControl('', Validators.required);
  emailControl= new FormControl('', Validators.email);
  phoneControl= new FormControl('', [Validators.required, Validators.maxLength(10)]);

  colorControl= new FormControl('#000000');
  dateControl= new FormControl('');
  escolarControl= new FormControl('bachillerato');
  pasatiempoControl= new FormControl('');
  estadoControl= new FormControl('soltero', Validators.required);

  genderControl= new FormControl('');
  policyControl= new FormControl(false, Validators.required);
  terminoControl= new FormControl(false, Validators.required);
}
