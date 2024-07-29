/*UserLayoutComponent */
import { Routes } from '@angular/router';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'infoTable',
        component: InfoTableComponent,
      },
    ],
  },
];
