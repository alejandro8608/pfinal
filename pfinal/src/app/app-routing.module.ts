import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MIMODULOComponent } from './mimodulo/mimodulo.component';

const routes: Routes = [
  { path: '', component: MIMODULOComponent },/*/carga modulo login*/
  { path: 'mimodulo', component: MIMODULOComponent }/*/carga componente registro*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
