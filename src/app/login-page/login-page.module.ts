import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { SharedModule } from '../common/common.module';
import { routing } from './login-page.routing';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [],
  exports:[LoginPageComponent]
})
export class LoginPageModule { }
