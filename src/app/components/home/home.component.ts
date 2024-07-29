import { Component } from '@angular/core';
import { MaterialComponentModule } from '../../material-component/material-component.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialComponentModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
