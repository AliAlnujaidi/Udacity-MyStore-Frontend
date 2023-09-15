import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

const routes: Routes = [
  { path: 'products/:id', component: ProductPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
