import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MailformComponent } from './mailform/mailform.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: MailformComponent },
  { path: 'thanks', component: ContentPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
