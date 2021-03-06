import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { AttractionsDetailComponent } from './attractions-detail/attractions-detail.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: TopComponent
  },
  {
    path: 'attractions',
    component: AttractionsComponent
  },
  {
    path: 'attractions/:id',
    component: AttractionsDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
