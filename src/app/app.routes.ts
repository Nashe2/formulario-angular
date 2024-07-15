/* import { Component } from '@angular/core'; */
/* import path from 'path'; */
import { Routes } from '@angular/router';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { HeaderComponent } from './components/header/header.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { LayoutComponent } from './layout/layout.component';

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
    ],
  },/* termina los hijos del layout */
  {
    path: 'header',
    component: HeaderComponent,
  },
];
