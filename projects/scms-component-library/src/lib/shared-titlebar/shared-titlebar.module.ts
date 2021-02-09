import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitlebarComponent } from './shared-titlebar.component';



@NgModule({
  declarations: [
    SharedTitlebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedTitlebarComponent
  ]
})
export class SharedTitlebarModule { }
