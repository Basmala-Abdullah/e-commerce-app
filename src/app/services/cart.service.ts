import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { CartItem } from '../types/cart-item';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  //private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
        if(existingItem.quantity<existingItem.product.stock){
          existingItem.quantity++;
      }
    }else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  decreaseQuantity(product: Product) {
    const existingItem = this.cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity--;
      if (existingItem.quantity === 0) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
      }
    }
  }

  removeProduct(product: Product) {
    this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((acc,item)=>acc+item.quantity*item.product.price,0);
  }
  getCartItems(): CartItem[] {
    return this.cartItems;
  }
  
  constructor() { 

  }
}
