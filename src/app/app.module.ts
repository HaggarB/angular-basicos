import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], //servicios especificos a un modulo
  bootstrap: [AppComponent] //modulo principal
})
export class AppModule { }
