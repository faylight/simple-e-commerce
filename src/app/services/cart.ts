import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([
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
  ]);

  addToCart(item: Product) {
    this.cart.set([...this.cart(), item]);
  }

  deleteFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}
