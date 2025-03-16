import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../types/cart-item';
import { Product } from '../types/product';
@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})


export class CartComponent {
  constructor(private cartService: CartService){}
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  ngOnInit(){
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.calculateTotalPrice();
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  decreaseQuantity(product: Product){
    this.cartService.decreaseQuantity(product);
    this.ngOnInit();
  }

  removeProduct(product: Product){
    this.cartService.removeProduct(product);
    this.ngOnInit();
  }
  
  calculateTotalPrice(){
    console.log(this.cartService.getCartItems());
    return this.cartService.getTotalPrice();
  }

}
