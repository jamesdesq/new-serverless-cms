import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from 'serverless-cms-lib';
import { ContentPageComponent } from './content-page/content-page.component';
import { MailformComponent } from './mailform/mailform.component';


const routes: Routes = [
  { path: '', component: ContentPageComponent },
  { path: 'contact', component: MailformComponent },
  { path: ':any', component: ContentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
