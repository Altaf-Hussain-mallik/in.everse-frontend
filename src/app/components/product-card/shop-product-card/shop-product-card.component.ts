import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../common/product';

@Component({
  selector: 'app-shop-product-card',
  templateUrl: './shop-product-card.component.html',
  styleUrls: ['./shop-product-card.component.css']
})
export class ShopProductCardComponent implements OnInit {
  @Input() products: Product[] = [];
  mainImages: string[][] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        // Initialize mainImages with default main images
        this.products.forEach((product, index) => {
          if (product.images.length > 0) {
            this.mainImages[index] = [product.images[0]]; // Set the default main image
          }
        });
      }
    );
  }

  changeImage(image: string, index: number) {
    this.mainImages[index] = [image];
  }
}
