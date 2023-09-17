import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsListComponent},
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  {path: 'order-success', component: OrderSuccessComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
