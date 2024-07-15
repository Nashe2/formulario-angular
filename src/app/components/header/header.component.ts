import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MaterialComponentModule } from '../../material-component/material-component.module';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialComponentModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

}
