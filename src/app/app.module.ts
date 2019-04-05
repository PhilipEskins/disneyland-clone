import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { AttractionsDetailComponent } from './attractions-detail/attractions-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopComponent,
    AttractionsComponent,
    AttractionsDetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
