import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazySettingsComponent } from './lazy-settings/lazy-settings.component';

const routes: Routes = [
  {
    path: '',
    component: LazySettingsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
