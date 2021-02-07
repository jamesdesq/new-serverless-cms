import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { QuoteBlockComponent } from './quote-block/quote-block.component';

@NgModule({
    declarations: [HomepageComponent, QuoteBlockComponent],
    exports: [HomepageComponent, QuoteBlockComponent]
})
export class ServerlessCmsModule {}