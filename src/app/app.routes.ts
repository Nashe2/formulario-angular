/* import { Component } from '@angular/core'; */
/* import path from 'path'; */
import { Routes } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { LayoutComponent } from './layout/layout.component';
import { MultiCamposComponent } from './pages/multi-campos/multi-campos.component';
import { GeneradorFormularioComponent } from './pages/generador-formulario/generador-formulario.component';
import { MultipleFgComponent } from './pages/multiple-fg/multiple-fg.component';
import { InfoTableComponent } from './components/info-table/info-table.component';

export const routes: Routes = [
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
        component: GeneradorFormularioComponent
      },
      {
        path: 'formFromGrup',
        component: MultipleFgComponent
      },
      {
        path:'infoTable',
        component: InfoTableComponent
      }
    ],
  },/* termina los hijos del layout */
  {
    path: 'header',
    component: HeaderComponent,
  },
];
