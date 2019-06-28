import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyProfileComponent } from './lazy-profile/lazy-profile.component';

const routes: Routes = [
  { path: '', component :  LazyProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
