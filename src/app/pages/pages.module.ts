import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbCardModule
} from '@nebular/theme';

import { MainComponent } from './main/main.component';

const COMPONENTS = [
  MainComponent,
]

const MODULE = [
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, ...MODULE],
  exports: [...COMPONENTS, ...MODULE],
  providers: [NbSidebarService]
})
export class PagesModule { }
