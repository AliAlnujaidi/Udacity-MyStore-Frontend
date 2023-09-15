import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    ItemComponent,
    SignupFormComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
