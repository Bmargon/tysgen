import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { LocationComponent } from './pages/location/location.component';
import { DelegacionesComponent } from './pages/delegaciones/delegaciones.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'servicios', component: ServicesComponent},
  {path: 'localizacion', component: LocationComponent},
  {path: 'delegacion', component: DelegacionesComponent},
  {path: 'contacto', component: ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
