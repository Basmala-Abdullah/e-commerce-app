import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HeaderComponent } from '../header/header.component'; 
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() productItem: any;

  constructor(private router: Router, private cartService: CartService){

  }

  handleRedirect(id: number){
    this.router.navigate(['/product-details',id]);
  }

  addToCart(){
    this.cartService.addToCart(this.productItem);
    console.log(this.cartService.getCartItems());
  }
}
