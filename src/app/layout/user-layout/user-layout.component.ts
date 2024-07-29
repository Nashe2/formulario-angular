import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { MaterialComponentModule } from '../../material-component/material-component.module';
import { MenuItem } from '../../models/menuItem.modal';

@Component({
  selector: 'app-header-example',
  standalone: true,
  imports: [
    MaterialComponentModule,
    CommonModule,
    MatExpansionModule,
    RouterModule,
  ],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserLayoutComponent implements OnDestroy {
  menuItems: MenuItem[] = [
    {
      name: 'Mi Perfil',
      path: '/',
      icon: 'person',
    },
    {
      name: 'Menú Principal del extra',
      path: '/',
      icon: 'home',
    },
    {
      name: 'Municipios',
      path: '/servicio',
      icon: 'public',
    },
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
