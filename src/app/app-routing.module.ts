import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { LoginComponent } from './Components/login/login.component';
import { MiCuentaComponent } from './Components/mi-cuenta/mi-cuenta.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { AgregarFormComponent } from './Page/agregar-form/agregar-form.component';
import { AgregarProComponent } from './Page/agregar-pro/agregar-pro.component';
import { AgregarComponent } from './Page/agregar/agregar.component';
import { EditFormComponent } from './Page/edit-form/edit-form.component';
import { EditProjectComponent } from './Page/edit-project/edit-project.component';
import { EditComponent } from './Page/edit/edit.component';
import { ModalComponent } from './Page/modal/modal.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ContactoComponent } from './Components/contacto/contacto.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'agregar-form', component: AgregarFormComponent },
  { path: 'agregar-pro', component: AgregarProComponent },
  { path: 'navBar', component: NavBarComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edit-form/:id', component: EditFormComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
