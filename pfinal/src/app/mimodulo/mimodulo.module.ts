import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MIMODULORoutingModule } from './mimodulo-routing.module';
import { MIMODULOComponent } from './mimodulo.component';


@NgModule({
  declarations: [
    MIMODULOComponent
  ],
  imports: [
    CommonModule,
    MIMODULORoutingModule
  ]
})
export class MIMODULOModule { }
