import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductPageComponent,
    HomeComponent,
    ProductsListComponent,
    CartPageComponent,
    ProductCardComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
