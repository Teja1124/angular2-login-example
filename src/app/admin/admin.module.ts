import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../common/common.module';
import { routing } from './admin.routing';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [],
  exports:[AdminComponent]
})
export class AdminModule { }
