import { Component } from '@angular/core';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MaterialComponentModule, RouterModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
