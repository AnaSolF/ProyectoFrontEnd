import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './Components/inicio/inicio.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { MiCuentaComponent } from './Components/mi-cuenta/mi-cuenta.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AgregarComponent } from './Page/agregar/agregar.component';
import { AgregarFormComponent } from './Page/agregar-form/agregar-form.component';
import { AgregarProComponent } from './Page/agregar-pro/agregar-pro.component';
import { ButtonsComponent } from './Page/buttons/buttons.component';
import { EditComponent } from './Page/edit/edit.component';
import { EditFormComponent } from './Page/edit-form/edit-form.component';
import { EditProjectComponent } from './Page/edit-project/edit-project.component';
import { FooterComponent } from './Page/footer/footer.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';
import { ModalComponent } from './Page/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutMeComponent,
    SkillsComponent,
    FormacionComponent,
    MiCuentaComponent,
    ProyectosComponent,
    RegistroComponent,
    LoginComponent,
    ContactoComponent,
    AgregarComponent,
    AgregarFormComponent,
    AgregarProComponent,
    ButtonsComponent,
    EditComponent,
    EditFormComponent,
    EditProjectComponent,
    FooterComponent,
    NavBarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
