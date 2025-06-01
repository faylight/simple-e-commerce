import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from './product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (item of products(); track item.id) {
      <app-product-card [product]="item" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsList {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image: 'coffe.png',
      price: 100,
      stock: 10,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'apples.png',
      price: 200,
      stock: 0,
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'kiwi.png',
      price: 300,
      stock: 5,
    },
    {
      id: 4,
      title: 'Product 4',
      image: 'coffe.png',
      price: 300,
      stock: 29,
    },
  ]);
}
