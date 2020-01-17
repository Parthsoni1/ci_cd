import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyloginComponent } from './components/mylogin/mylogin.component';
import { HeaderComponent } from './components/header/header.component';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { RegesterComponent } from './components/regester/regester.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PasschangeComponent } from './components/passchange/passchange.component';


const routes: Routes = [
  { path: '', redirectTo: 'appoint', pathMatch: 'full' },
  { path: 'appoint', component: AppoinmentComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'changepass/:id', component: PasschangeComponent },

  {
    path: '', component: HeaderComponent,
    children: [
      { path: 'login', component: MyloginComponent },
      { path: 'regester', component: RegesterComponent },
   
      // { path: 'reduxcheck', component: ReduxcheckComponent },
      // { path: 'reduxcheck2', component: Reduxcheck2Component },
      // {path: 'customers',loadChildren: '../app/customers/customers.module#CustomersModule'},
      // { path: 'details/:id', component: EditUserComponent, resolve: {data : EditUserResolver} }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
