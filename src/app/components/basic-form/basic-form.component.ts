import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from "../../layout/layout.component";
import { RouterModule } from '@angular/router';
/* import {ThemePalette} from '@angular/material/core'; */

@Component({
  selector: 'app-basic-form',
  standalone: true,
  imports: [CommonModule, MaterialComponentModule, ReactiveFormsModule, RouterModule, LayoutComponent],
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {

  nameControl = new FormControl('');
  emailControl = new FormControl('');
  phoneControl = new FormControl('');
  colorControl = new FormControl('#000000');
  dateControl = new FormControl('');

  escolarControl = new FormControl('bachillerato');
  pasatiempoControl = new FormControl('');
  estadoControl = new FormControl('soltero');

  genderControl = new FormControl('');
  policyControl = new FormControl(false);
  terminoControl = new FormControl(false);
  /* tagControl = new FormControl('primary' as ThemePalette); */
}
