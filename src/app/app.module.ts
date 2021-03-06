import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
