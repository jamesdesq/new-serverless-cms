import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteBlockComponent } from './quote-block.component';



@NgModule({
  declarations: [
    QuoteBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuoteBlockComponent  ]
})
export class QuoteBlockModule { }