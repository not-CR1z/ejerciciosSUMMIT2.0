import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Interceptors
import { AddTokenInterceptor } from './helpers/add-token.interceptor';


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
import { NuevoCuestionarioComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/nuevo-cuestionario.component';
import { PasoUnoComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/paso-uno/paso-uno.component';
import { PasoDosComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/paso-dos.component';
import { NuevaPreguntaComponent } from './component/dashboard/cuestionarios/nuevo-cuestionario/paso-dos/nueva-pregunta/nueva-pregunta.component';
import { CuestionariosComponent } from './component/dashboard/cuestionarios/cuestionarios.component';


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
    NuevoCuestionarioComponent,
    PasoUnoComponent,
    PasoDosComponent,
    NuevaPreguntaComponent,
    CuestionariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
