import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentComponent } from './components/appoinment/appoinment.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { MyloginComponent } from './components/mylogin/mylogin.component';
import { RegesterComponent } from './components/regester/regester.component';
import { HeaderComponent } from './components/header/header.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { PasschangeComponent } from './components/passchange/passchange.component';
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AppoinmentComponent,
    UserListComponent,
    LoginComponent,
    MyloginComponent,
    RegesterComponent,
    HeaderComponent,
    ForgotpassComponent,
    PasschangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
