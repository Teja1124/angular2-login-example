import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    {
      path: 'adminarea', component: AdminComponent
    }
  ]);
