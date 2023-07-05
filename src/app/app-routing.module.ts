import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './component/inicio/bienvenida/bienvenida.component';
import { RegisterComponent } from './component/inicio/register/register.component';
import { LoginComponent } from './component/inicio/login/login.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CuestionariosComponent } from './component/dashboard/cuestionarios/cuestionarios.component';
import { CambiarPaswordComponent } from './component/dashboard/cambiar-pasword/cambiar-pasword.component';



const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: '', component: BienvenidaComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', component: CuestionariosComponent },
      { path: 'cambiarPassword', component: CambiarPaswordComponent }
    ]
  },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
