import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { LazyProfileComponent } from './lazy-profile/lazy-profile.component';

@NgModule({
  declarations: [LazyProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
