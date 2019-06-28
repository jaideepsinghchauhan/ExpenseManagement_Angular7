import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { LazySettingsComponent } from './lazy-settings/lazy-settings.component';

@NgModule({
  declarations: [LazySettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
