import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MIMODULOComponent } from './mimodulo.component';

const routes: Routes = [{ path: 'mimodulo', component: MIMODULOComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MIMODULORoutingModule { }
