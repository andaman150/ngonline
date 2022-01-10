import { NewsComponent } from './news/news.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component:HomeComponent},
  {path : 'about', component:AboutComponent},
  {path : 'product', component:ProductsComponent},
  {path : 'product/:id', component:ProductDetailComponent},
  {path : 'news', component:NewsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
