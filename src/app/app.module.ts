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
// import { HomepageComponent } from 'serverless-cms-lib/dist/public-api';

@NgModule({
  declarations: [
    AppComponent,
    MailformComponent,
    // HomepageComponent,
    ContentPageComponent,
    MenuComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
