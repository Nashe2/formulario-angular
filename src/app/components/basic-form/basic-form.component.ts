import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import {
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
/* import { LayoutComponent } from '../../layout/layout.component'; */

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [
    CommonModule,
    MaterialComponentModule,
    ReactiveFormsModule,
    RouterModule,
  ],/*     LayoutComponent, */
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss',
})
export class BasicFormComponent {

  nameControl= new FormControl('', Validators.required);
  emailControl= new FormControl('', [Validators.required, Validators.email]);
  phoneControl= new FormControl('', [Validators.required, Validators.maxLength(10)]);

  colorControl= new FormControl('#000000');
  dateControl= new FormControl('');
  escolarControl= new FormControl('bachillerato');
  pasatiempoControl= new FormControl('',  Validators.required);
  estadoControl= new FormControl('soltero', Validators.required);

  genderControl= new FormControl('', Validators.required);
  policyControl= new FormControl(false, Validators.requiredTrue);
  terminoControl= new FormControl(false, Validators.requiredTrue);

}
