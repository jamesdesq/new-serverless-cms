import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './contentful.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContentfulConnectorModule { 

  public static forRoot(environment: any): ModuleWithProviders<ContentfulConnectorModule> { 
    return { 
      ngModule: ContentfulConnectorModule,
      providers: [
        ContentfulService,
        {
          provide: 'env',
          useValue: environment 
        }
      ]
    }
  }
}
