import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { BienvenidaComponent } from './component/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './component/inicio/login/login.component';
import { RegisterComponent } from './component/inicio/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CambiarPaswordComponent } from './component/dashboard/cambiar-pasword/cambiar-pasword.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    LoadingComponent,
    CambiarPaswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
