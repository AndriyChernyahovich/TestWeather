import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DividerComponent } from './divider/divider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BigHeadingComponent } from './big-heading/big-heading.component';
import { SmallHeadingComponent } from './small-heading/small-heading.component';
import { FeaturesComponent } from './features/features.component';
import { WeatherComponent } from './weather/weather.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DividerComponent,
    SidebarComponent,
    BigHeadingComponent,
    SmallHeadingComponent,
    FeaturesComponent,
    WeatherComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
