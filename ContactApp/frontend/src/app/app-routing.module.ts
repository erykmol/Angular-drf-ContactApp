import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterPageComponent } from './register-page/register-page.component';


const routes: Routes = [
  // {
    // path: '',
    // component: MainPageComponent,
    // children: [
    //   {path: 'register-page', loadChildren: () => import('./register-page/register-page-routing.module')},
    //   {path: 'contact-form', component: ContactFormComponent}
    // ],
    // redirectTo: 'contact-form',
  // },
  {
    path: 'contact-form',
    component: ContactFormComponent,
  },
  {
    path: 'register-page',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
