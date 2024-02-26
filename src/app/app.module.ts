import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ShopProductCardComponent } from './components/product-card/shop-product-card/shop-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShopProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
