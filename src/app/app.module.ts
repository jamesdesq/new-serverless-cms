import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailformComponent } from './mailform/mailform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { ContentfulConnectorModule } from 'contentful-connector';
import { environment } from 'src/environments/environment';
import { ScmsComponentLibraryModule, SharedTitlebarModule, QuoteBlockModule } from 'projects/scms-component-library/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    MailformComponent,
    ContentPageComponent,
    MenuComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ScmsComponentLibraryModule,
    SharedTitlebarModule,
    QuoteBlockModule,
    ContentfulConnectorModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
