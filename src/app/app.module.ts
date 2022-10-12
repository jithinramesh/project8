import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import{HttpClientModule} from '@angular/common/http'

const link:Routes=[
  {path:"",component:QoutesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
