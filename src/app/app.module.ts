import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AddEditUserComponent } from './Components/users/add-edit-user/add-edit-user.component';
import { ShowUserComponent } from './Components/users/show-user/show-user.component';
import { UserComponent } from './Components/users/user/user.component';
import { ProductComponent } from './Components/product/product/product.component';
import { AddEditProductComponent } from './Components/product/add-edit-product/add-edit-product.component';
import { ShowProductComponent } from './Components/product/show-product/show-product.component';
import { ForgotPasswordComponent } from './Components/forgotPassword/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AddEditUserComponent,
    ShowUserComponent,
    UserComponent,
    ProductComponent,
    AddEditProductComponent,
    ShowProductComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
