import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMagazineComponent } from './view-magazine/view-magazine.component';

const routes: Routes = [
  {path:'', component:ViewMagazineComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
