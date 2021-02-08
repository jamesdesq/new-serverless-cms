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
import { ServerlessCmsModule } from 'serverless-cms-lib';
import { ContentfulConnectorModule } from 'projects/contentful-connector/src/lib/contentful-connector.module';
import { environment } from 'src/environments/environment';

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
    ServerlessCmsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ContentfulConnectorModule.forRoot(environment)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
