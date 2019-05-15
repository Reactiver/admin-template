import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// component imports
import { MainComponent } from './main/main.component';

const COMPONENTS = [
  MainComponent,
]

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [ CommonModule ],
  exports: [ ...COMPONENTS ]
})
export class PagesModule { }
