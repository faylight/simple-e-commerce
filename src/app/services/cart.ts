import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([]);

  addToCart(item: Product) {
    this.cart.set([...this.cart(), item]);
  }

  constructor() {}
}
