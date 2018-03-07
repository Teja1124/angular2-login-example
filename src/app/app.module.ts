import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPageModule } from './login-page/login-page.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './common/common.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    SharedModule,
    AdminModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
