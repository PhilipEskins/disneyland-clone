import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { AttractionsComponent } from './attractions/attractions.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'attractions',
    component: AttractionsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
