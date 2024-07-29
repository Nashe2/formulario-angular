/*UserLayoutComponent */
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
/* Otros componentes */
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { HeaderComponent } from './components/header/header.component';
import { MuniciComponent } from './components/munici/munici.component';
import { LayoutComponent } from './layout/layout.component';
import { GeneradorFormularioComponent } from './pages/generador-formulario/generador-formulario.component';
import { MultiCamposComponent } from './pages/multi-campos/multi-campos.component';
import { MultipleFgComponent } from './pages/multiple-fg/multiple-fg.component';
import { PruebaComponent } from './pages/prueba/prueba.component';

export const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'infoTable',
        component: InfoTableComponent,
      },
      {
        path: 'bienvenida',
        component: HomeComponent,
      },
      {
        path: 'munici',
        component: MuniciComponent,
      },
    ],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'basic',
        component: BasicFormComponent,
      },
      {
        path: 'prueba',
        component: PruebaComponent,
      },
      {
        path: 'formMultiplesCampos',
        component: MultiCamposComponent,
      },
      {
        path: 'generador',
        component: GeneradorFormularioComponent,
      },
      {
        path: 'formFromGrup',
        component: MultipleFgComponent,
      },
      {
        path: 'infoTable',
        component: InfoTableComponent,
      },
    ],
  } /* termina los hijos del layout */,
  {
    path: 'header',
    component: HeaderComponent,
  },
];
