import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { LocationComponent } from './pages/location/location.component';
import { DelegacionesComponent } from './pages/delegaciones/delegaciones.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ModalComponent } from './shared/modal/modal.component';

// modules
import { HttpClientModule } from '@angular/common/http';
// angular

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// mapa
import { AgmCoreModule } from '@agm/core';


@NgModule({
  entryComponents: [ModalComponent],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    LocationComponent,
    DelegacionesComponent,
    ContactComponent,
    FooterComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBn6Y3t1FH5q7F0oyQn8lFJDULusR1buts'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
