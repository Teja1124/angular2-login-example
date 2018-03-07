import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page.component';

export const routing: ModuleWithProviders = RouterModule.forChild(
  <Routes>[
    {
      path: 'login', component: LoginPageComponent
    }
  ]);
