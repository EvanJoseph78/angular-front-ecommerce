import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { BoxServicosComponent } from './components/box-servicos/box-servicos.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitleBarComponent,
    BannerComponent,
    BoxServicosComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
